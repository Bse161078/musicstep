import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { SelectWithInput } from "..";
import { NavbarWithSearchStyle } from "./NavbarWithSearch.style";
import { useLoginContext } from "../../context/authenticationContext";
import { userInfo } from "os";
const NavbarWithSearch = (props:any) => {
  const { dispatch, state } = useLoginContext();
  const [venues, setVenues] = useState([]);
  const [subscribtion, setSubscribtion] = useState({
    active:true
  });
  const status = localStorage.getItem("status")
  useEffect(() => {
    axios
      .get("/v1/users/allEventsByVenues", {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        setVenues(res.data.event);
        setSubscribtion(res.data.subscription)
      })
      .catch((error) => {
      });
 
  }, []);





  const {active} = props
  return (
    <NavbarWithSearchStyle  >
      <Link className="logo-wrapper" to="/explore-venue">
        <img src="/images/logo.png" alt="logo" />
      </Link>

      <SelectWithInput placeholder="Find a venue or event 24/7"
      setSearch = {props.setSearch} search={props.search}
      />

      <div className="links-wrapper">
        <span>Upcoming Itinerary</span>
        {subscribtion?subscribtion.active===true?<span>{props.userCredit} Credits</span>:
        <span> Expired </span>:
        <span> Cancelled </span>
        }
        <Link to="/dashboard/home">
          <span>
            <img
              className="image"
              alt="profile"
              src={state.data.imageUrl?process.env.REACT_APP_BASE_URL + "/images/" + state.data.imageUrl:"/images/person.svg"}
            />
          </span>
        </Link>
      </div>
    </NavbarWithSearchStyle>
  );
};

export default NavbarWithSearch;
