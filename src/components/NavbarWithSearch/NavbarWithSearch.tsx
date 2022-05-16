import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { SelectWithInput } from "..";
import { NavbarWithSearchStyle } from "./NavbarWithSearch.style";
import { useLoginContext } from "../../context/authenticationContext";
const NavbarWithSearch = (props:any) => {
  const { dispatch, state } = useLoginContext();
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    axios
      .get("/v1/users/allEventsByVenues", {
        headers: { Authorization: `Bearer ${state.authToken}` },
      })
      .then((res) => {
        setVenues(res.data);
      })
      .catch((error) => {
      });
  }, []);
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
        <span>{state.data.credits} Credits</span>
        <Link to="/dashboard/home">
          <span>
            <img
              className="image"
              alt="profile"
              src={process.env.REACT_APP_BASE_URL + "/" + state.data.imageUrl}
            />
          </span>
        </Link>
      </div>
    </NavbarWithSearchStyle>
  );
};

export default NavbarWithSearch;
