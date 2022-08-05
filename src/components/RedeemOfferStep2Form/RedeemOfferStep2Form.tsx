import React, {useState} from "react";
import axios from "axios";
import {MessageModal, TrialFormWrapper} from "..";
import {useUserContext} from "../../context/userContext";
import {
    FilledButtonStyle,
    OutlineButtonStyle,
} from "../../styles/Common.style";
import {RedeemOfferStep2FormStyle} from "./RedeemOfferStep2Form.style";
import OtpInput from "react-otp-input";
import Loading from "../../components/Loading/Loading"

type TrailSetPasswordProps = {
    setCurrentForm: (data: string) => void;
};

const RedeemOfferStep2Form = (props: TrailSetPasswordProps) => {
    const {setCurrentForm} = props;
    const {
        state: {id},
        dispatch,
    } = useUserContext();
    const [isCodeSend, setCodeSend] = useState(false);
    const [isContinueModal, setContinueModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [otp, setOtp] = useState();
    const [isLoading, setLoading] = useState(false);
    const handleButtonSubmit = (e: any) => {
        setLoading(true);
        const userId=!id?localStorage.getItem("id"):id;

        if(otp)
        {
        axios
            .patch(`/v1/users/createCode/${userId}`, {
                code: otp,
            })
            .then((res) => {
                setContinueModal(true);
                dispatch({
                    type: "SUBMIT_GENERAL_INFO",
                    payload: {
                        firstName: e.firstName,
                        lastName: e.lastName,
                        dob: e.dob,
                        phoneNumber: e.phoneNumber,
                        email: e.email,
                    },
                });
                if (res.data.isVerified === true) {

                    setContinueModal(true);
                    setLoading(false)
                }
            })
            .catch((error) => {
                setErrorMessage(error.response?.data.message);
                setLoading(false)
            });
          }else{
            setLoading(false)
            setErrorMessage("Please enter the code")
          }
    };

    const handleChangeButtonClick = () => {
        setCurrentForm("redeem-offer");
    };

    const {
        state: {phoneNumber},
    } = useUserContext();

    return (
        <TrialFormWrapper heading="Redeem Your Offer">
            {isLoading && <Loading/>}
            <RedeemOfferStep2FormStyle>
                <h3 className="steps-count">Step 1 of 2</h3>

                <h4 className="verify-yourself">Verify Yourself</h4>
                <h3 className="form-wrapper-heading">
                    Please enter the 4-digit code on your phone now.
                    <br/>
                    Code sent on: {phoneNumber}
                </h3>
                <div className="input-wrapper">
                    <OtpInput
                        onChange={(otp: any) => {
                            setOtp(otp);
                        }}
                        numInputs={4}
                        placeholder="0000"
                        separator={<span>&nbsp;&nbsp;&nbsp;</span>}
                        value={otp}
                        inputStyle={{
                            height: "53px",
                            width: "100%",
                            border: "1px solid #0c0c0c",                         
                            borderRadius: "50px",
                            fontSize: "18px",
                        }}
                        
                        isInputNum={true}
                    />
                </div>
                <div className="error-wrapper">
                    {errorMessage !== "" && <p>{errorMessage}</p>}
                </div>
                <FilledButtonStyle
                    width="100%"
                    height="60px"
                    onClick={handleButtonSubmit}
                    buttonType='light'
                >
                    Continue
                </FilledButtonStyle>

                <p className="info-details">Didn't receive a code?</p>

                <div className="buttons-wrapper">
                    <OutlineButtonStyle
                        width="250px"
                        height="60px"
                        onClick={handleChangeButtonClick}
                        className="button-mobile"
                    >
                        Change Number
                    </OutlineButtonStyle>
                    <OutlineButtonStyle
                        width="250px"
                        height="60px"
                        className="button-mobile"

                        onClick={() => {
                            setCodeSend(true);
                        }}
                    >
                        Resend Code
                    </OutlineButtonStyle>
                </div>
                <p className="info-details">
                    We need to verify using your phone number because we only allow one
                    account per person
                </p>
                <p className="info-footer-heading">
                    <span>Questions or Need Help?</span>
                </p>
            </RedeemOfferStep2FormStyle>

            <MessageModal
                type="light"
                isModalVisible={isCodeSend}
                setIsModalVisible={setCodeSend}
                message="4-digit code has been successfully sent to your phone number again."
            />

            <MessageModal
                type="light"
                isModalVisible={isContinueModal}
                setIsModalVisible={setContinueModal}
                message="You have been verified successfully."
                handleOkClick={() => {
                    setCurrentForm("trial-billing-information");
                }}
                buttonText="Continue"
            />
        </TrialFormWrapper>
    );
};

export default RedeemOfferStep2Form;
