import React, {useState} from "react";
import {ContentHeader, DashboardHeader} from "..";
import {TickFilledIcon} from "../../../assets";
import {FilledButtonStyle} from "../../../styles/Common.style";
import {InputCheckbox, Loading, MessageModal} from "../../../components";
import {EmailPreferenceStyle} from "./EmailPreference.style";
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';

type EmailPreferenceProps = {
    setCurrentPage: any;
};

const EmailPreference = (props: EmailPreferenceProps) => {
    const {setCurrentPage} = props;
    const user: any = JSON.parse(localStorage.getItem("data") || "{}");
    const [emailPrefereence1, setEmailPreference1] = useState(user.preferences && user.preferences.events_sales ? user.preferences.events_sales : false)
    const [emailPrefereence2, setEmailPreference2] = useState(user.preferences && user.preferences.unsubscribe ? user.preferences.unsubscribe : false)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    const [successModel, setsuccessModel] = useState(false);
    const [message, setMessage] = useState("");
    const [messageHeading, setMessageHeading] = useState("");


    const handleEmailPreffrence = () => {
        setLoading(true)

        const body = {
            events_sales: emailPrefereence1,
            unsubscribe: emailPrefereence2,
        }

        axios
            .put("/v1/partners/preferences/" + user.id,
                body,
                {
                    headers: {Authorization: `Bearer ${localStorage.getItem("authToken")}`},
                })
            .then((res) => {
                setLoading(false)
                localStorage.setItem("data", JSON.stringify(res.data));
                //setCurrentPage("payment-method");
                setsuccessModel(true);
                setMessageHeading("Success");
                setMessage("Preferences updated successfully");

            })
            .catch((error) => {
                setLoading(false)
                setErrorMessage("Please fill all the fields")
            });
    };

    const handleBackClick = () => {
        props.setCurrentPage("account-settings")
    }
    return (
        <>
            <EmailPreferenceStyle>
                <DashboardHeader heading="Email Preference" handleBackClick={handleBackClick}/>
                {loading && <Loading/>}

                <ContentHeader
                    heading="Organizing Events"
                    description="Helpful updates and tips for organizing events on MusicPass."
                />
                <div>

                    <div className="preferences-wrapper">
                        <Checkbox defaultChecked={emailPrefereence1} value={emailPrefereence1}
                                  onChange={() => setEmailPreference1(!emailPrefereence1)}/>

                        <span className="preference">
        Event Sales Recap.
        </span>
                    </div>

                    <div className="preferences-wrapper">
                        <Checkbox defaultChecked={emailPrefereence2} value={emailPrefereence2}
                                  onChange={() => setEmailPreference2(!emailPrefereence2)}/>

                        <span className="preference">
            Unsubscribe from all MusicPass newsletters and updates for event
            organizers.
          </span>
                    </div>
                </div>

                <FilledButtonStyle
                    onClick={() => handleEmailPreffrence()}
                    buttonType="dark"
                    width="290px"
                    height="60px"
                >
                    Save Preferences
                </FilledButtonStyle>
            </EmailPreferenceStyle>
            <MessageModal
                handleOkClick={() => {
                    setsuccessModel(false)
                    setCurrentPage("payment-method");
                }}
                isModalVisible={successModel}
                setIsModalVisible={setsuccessModel}
                message={message}
                heading={messageHeading}
            />
        </>
    );
};

export default EmailPreference;
