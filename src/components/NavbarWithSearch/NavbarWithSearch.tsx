import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";

import {SelectWithInput} from "..";
import {NavbarWithSearchStyle} from "./NavbarWithSearch.style";
import {useLoginContext} from "../../context/authenticationContext";
import {userInfo} from "os";

const NavbarWithSearch = (props: any) => {
    const {dispatch, state} = useLoginContext();
    const [venues, setVenues] = useState([]);

    const history = useHistory();

    const [subscribtion, setSubscribtion] = useState({
        active: true,
    });
    const status = localStorage.getItem("status");
    useEffect(() => {
        axios
            .get("/v1/users/allEventsByVenues", {
                headers: {Authorization: `Bearer ${state.authToken}`},
            })
            .then((res) => {
                setVenues(res.data.event);
                setSubscribtion(res.data.subscription);
            })
            .catch((error) => {
            });
    }, []);

    const handleSearch = (search: string) => {
        if (search.length > 0 && state.search !== search) {
            if (history.location.pathname !== "/explore-venue") {
                history.push("/explore-venue");
            }
            dispatch({type: "UPDATE_SEARCH", payload: {search}});
        }

        if (search.length === 0 && state.search !== search) {
            dispatch({type: "UPDATE_SEARCH", payload: {search: ""}});
        }
    };

    const {active} = props;
    return (
        <NavbarWithSearchStyle>

            <div>
                <Link className="logo-wrapper" to="/explore-venue">
                    <img src="/images/logo.png" alt="logo"/>
                </Link>
            </div>
            <SelectWithInput
                placeholder="Find a venue or event 24/7"
                navbar_search={props.navbar_search}
                setSearch={handleSearch}
                search={props.navbar_search}
            />

            <div className="links-wrapper">
        <span style={{cursor: "pointer"}} onClick={() => history.push("/explore-venue")}>
          Upcoming Events{" "}
        </span>
                {subscribtion ? (
                    subscribtion.active === true ? (
                        <span>{props.userCredit} Credits</span>
                    ) : (
                        <span> Expired </span>
                    )
                ) : (
                    <span> Inactive </span>
                )}
                <Link to="/dashboard/home">
          <span>
            <img
                className="image"
                alt="profile"
                src={
                    state.data.imageUrl
                        ? process.env.REACT_APP_BASE_URL +
                        "/images/" +
                        state.data.imageUrl
                        : "/images/person.svg"
                }
            />
          </span>
                </Link>
            </div>
        </NavbarWithSearchStyle>
    );
};

export default NavbarWithSearch;
