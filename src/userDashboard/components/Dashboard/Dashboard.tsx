import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {DashboardHeader, SideBar} from "../../../admin/components";
import {LeftChevronIcon} from "../../../assets";
import {NavbarWithSearch} from "../../../components";
import {userSidebarItems} from "../../../mockData/userSidebarItems";
import {useLoginContext} from "../../../context/authenticationContext";
import {DashboardStyle} from "./Dashboard.style";

type DashboardProps = {
    children: any;
    handleSubmit: any;
};

const Dashboard = (props: DashboardProps) => {
    const {children, handleSubmit} = props;
    const {state, dispatch} = useLoginContext();
    const [user, setUser] = useState({
        credits: 0
    })

    const getUser = () => {
        dispatch({
            type: "UPDATE_USER_INFO",
            payload: {
                refreshInfo: false,
            },
        });
        const user: any = JSON.parse(localStorage.getItem("data") || "{}");
        axios.get(`v1/users/${user.id}`, {
            headers: {Authorization: `Bearer ${state.authToken}`},
        })
            .then((res: any) => {
                setUser(res.data);
            }).catch((e) => {
        })
    }

    useEffect(() => {
        getUser();
    }, []);

    console.log("state = ",state)
    if (state.refreshInfo) {
        getUser();
    }

    return (
        <>
            <NavbarWithSearch userCredit={user.credits}/>
            <DashboardStyle>
                <div className="left-side">
                    <Link to="/dashboard/home" className="back-button">
                        <LeftChevronIcon/> Back To Profile
                    </Link>

                    <SideBar sidebarItems={userSidebarItems}/>
                </div>

                <div className="right-side">
                    <DashboardHeader
                        heading="Edit Profile"
                        handleSaveClick={handleSubmit}
                    />

                    <div>{children}</div>
                </div>
            </DashboardStyle>
        </>
    );
};

export default Dashboard;
