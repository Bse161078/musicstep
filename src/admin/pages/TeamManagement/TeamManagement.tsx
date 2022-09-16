import React, {useEffect, useState} from "react";
import {TabPaneStyle, TabsStyle} from "../../../styles/Fields.style";
import {InviteModal, AddRole} from "../../components";

import {
    Dashboard,
    DashboardHeader,
    SearchInputWithButton,
    TeamRolesList,
    TeamUsersList,
} from "../../components";

import {TeamManagementStyle} from "./TeamManagement.style";
import axios from "axios";
import {useLoginContext} from "../../../context/authenticationContext";
import Loading from "../../../components/Loading/Loading";

export default function TeamManagement() {
    const [isUserVisible, setUserVisible] = useState(false);
    const [isRoleVisible, setRoleVisible] = useState(false);
    const {state, dispatch} = useLoginContext();
    const [partner, setPartner] = useState<any>(null)
    const [isLoading, setLoading] = useState(false)


    const getPartner = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/v1/partners", {headers: {Authorization: `Bearer ${state.authToken}`}});
            setPartner(response.data)
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    }

    const updateRoles = async (roles: any) => {
        try {
            setLoading(true);
            const response = await axios.put("/v1/partners/role", {roles}, {headers: {Authorization: `Bearer ${state.authToken}`}});
            partner.roles = roles;
            setPartner(partner);
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    }


    const updateTeamMember = async (team: any) => {
        try {
            setLoading(true);
            const response = await axios.put("/v1/partners/team", {team}, {headers: {Authorization: `Bearer ${state.authToken}`}});
            partner.team = team;
            setPartner(partner);
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    }


    const addNewRole = async (role: string) => {
        try {
            setRoleVisible(false);
            const tempPartner = JSON.parse(JSON.stringify(partner));
            const roleObj = {name: role, date: new Date().toISOString()};
            if (tempPartner && tempPartner.roles) {
                (tempPartner.roles).push(roleObj);
            } else {
                tempPartner.roles = [roleObj];
            }
            updateRoles(tempPartner.roles);
        } catch (e) {
        }
    }

    const updateRole = async (role: string, index: number) => {
        try {
            setRoleVisible(false);
            let tempPartner = JSON.parse(JSON.stringify(partner));
            const roleObj = {name: role, date: new Date().toISOString()};
            tempPartner.roles[index] = roleObj;
            updateRoles(tempPartner.roles);
        } catch (e) {
        }
    }


    const removeRole = async (index: number) => {
        try {
            setRoleVisible(false);
            let tempPartner = JSON.parse(JSON.stringify(partner));
            (tempPartner.roles).splice(index, 1)
            updateRoles(tempPartner.roles);
        } catch (e) {
        }
    }


    const addNewTeam = (role: any, email: any) => {
        try {
            const tempPartner = JSON.parse(JSON.stringify(partner));
            const team = {name: "", role, email, date: new Date().toISOString()}
            if (tempPartner && tempPartner.team) {
                (tempPartner.team).push(team);
            } else {
                tempPartner.team = [team];
            }
            updateTeamMember(tempPartner.team);
        } catch (e) {
        }
    }

    const updateTeam = async (role: any, email: any, index: number) => {
        try {
            setRoleVisible(false);
            let tempPartner = JSON.parse(JSON.stringify(partner));
            const team = {name: "", role, email, date: new Date().toISOString()}
            tempPartner.team[index] = team;
            updateTeamMember(tempPartner.team);
        } catch (e) {
        }
    }


    useEffect(() => {
        getPartner()
    }, [])



    return (
        <Dashboard>
            {isLoading && <Loading/>}
            <TeamManagementStyle>
                <DashboardHeader
                    heading="Team Management"
                    description="Easily manage your team by inviting team members into default or customized roles."
                />
                <TabsStyle defaultActiveKey="1">
                    <TabPaneStyle tab="Users" key="1">
                        <SearchInputWithButton
                            handleButtonClick={() => {
                                setUserVisible(true);
                            }}
                            buttonTitle="Invite"
                        />

                        <div className="table-wrapper">
                            <TeamUsersList teams={partner && partner.team}
                                           roles={partner && partner.roles}
                                           updateTeam={updateTeam}/>
                        </div>
                    </TabPaneStyle>
                    <TabPaneStyle tab="Roles" key="2">
                        <SearchInputWithButton
                            handleButtonClick={() => setRoleVisible(true)}
                            buttonTitle="Add Role"
                        />

                        <div className="table-wrapper">
                            <TeamRolesList
                                roles={partner && partner.roles}
                                updateRole={updateRole}
                                removeRole={removeRole}
                            />
                        </div>
                    </TabPaneStyle>
                </TabsStyle>
            </TeamManagementStyle>


                <InviteModal
                    isModalVisible={isUserVisible}
                    setIsModalVisible={setUserVisible}
                    roles={partner && partner.roles}
                    addNewTeam={addNewTeam}
                />

            {
                isRoleVisible &&
                <AddRole
                    isModalVisible={isRoleVisible}
                    setIsModalVisible={setRoleVisible}
                    addNewRole={addNewRole}
                />
            }
        </Dashboard>
    );
}
