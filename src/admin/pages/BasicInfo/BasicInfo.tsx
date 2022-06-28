import React, {useMemo, useState} from "react";
import {Loading} from "../../../components";

import {
    Dashboard,
    OrganizationProfileForm,
    PreviewOrganizationInfo,
} from "../../components";

import {BasicInfoStyle} from "./BasicInfo.style";

const BasicInfo = () => {
    const [currentPage, setCurrentPage] = useState("preview");
    const [organizerProfile, setOrganizerProfile] = useState(null);
    const CurrentPage = useMemo(() => {
        switch (currentPage) {
            case "preview":
                return (
                    <div>

                        <PreviewOrganizationInfo
                            setOrganizerProfile={setOrganizerProfile}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                );

            case "add-organization":
                return (
                    <OrganizationProfileForm
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                );

            case "edit-organization":
                return <OrganizationProfileForm organizerProfile={organizerProfile} currentPage={currentPage}
                                                setCurrentPage={setCurrentPage}/>;

            case "preview-organization":
                return <OrganizationProfileForm  organizerProfile={organizerProfile}
                                                 currentPage={currentPage}
                                                 setCurrentPage={setCurrentPage} />;

            default:
                return <PreviewOrganizationInfo setCurrentPage={setCurrentPage}/>;
        }
    }, [currentPage]);

    console.log(currentPage);

    return (
        <Dashboard>
            <BasicInfoStyle>{CurrentPage}</BasicInfoStyle>
        </Dashboard>
    );
};

export default BasicInfo;
