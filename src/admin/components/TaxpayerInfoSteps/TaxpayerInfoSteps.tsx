import React, {useEffect, useMemo, useState} from "react";
import {IRSForm2, IRSSubstituteForm, TaxpayerForm, TaxPayerStep1} from "..";
import {Loading, MessageModal} from "../../../components";
import {
    FilledButtonStyle,
    OutlineButtonStyle,
} from "../../../styles/Common.style";
import {StepsStyle, StepStyle} from "../../../styles/Fields.style";

import {TaxpayerInfoStepsStyle} from "./TaxpayerInfoSteps.style";
import axios from "axios";
import {useLoginContext} from "../../../context/authenticationContext";

const TaxpayerInfoSteps = ({
                               setCurrentPage, onChangeForm, taxInfo, count,hideModal
                               , onChangeInput, onChangeSignature, isLoading, updatePartnerTaxInfo, isModalVisible, setIsModalVisible
                           }: any) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [buttonClicked,setButtonClicked]=useState(0);
    const customDot = (dot: any) => <div>{dot}</div>;


    useEffect(()=>{
        return function cleanup() {
            hideModal();
        };
    },[])

    const validateInfo=()=>{
        setButtonClicked(buttonClicked+1);
    }

    const handleNextStep = () => {
        setButtonClicked(0)
        setCurrentStep(currentStep + 1);
    };
    const handlePreviousStep = () => {
        setButtonClicked(0)
        setCurrentStep(currentStep - 1);
    };

    const handleSubmit=()=>{
        updatePartnerTaxInfo();
    }


    const CurrentTab = useMemo(() => {
        switch (currentStep) {
            case 1:
                return <TaxpayerForm onChangeInput={onChangeForm}  taxInfo={taxInfo} count={count}
                                     buttonClicked={buttonClicked} handleNextStep={handleNextStep}/>;

            case 2:
                return <IRSSubstituteForm federalTaxClassification={taxInfo.federalTaxClassification}
                                          taxInfo={taxInfo} count={count}
                                          onChangeInput={onChangeInput}
                                          buttonClicked={buttonClicked}
                                          handleNextStep={handleNextStep}/>;

            case 3:
                return <IRSForm2 onChangeSignature={onChangeSignature}
                                 taxInfo={taxInfo} count={count}
                                 buttonClicked={buttonClicked}
                                 handleNextStep={handleSubmit}/>;

            default:
                return <TaxPayerStep1/>;
        }
    }, [currentStep,buttonClicked]);


    return (
        <TaxpayerInfoStepsStyle>
            {isLoading && <Loading/>}
            <div className="steps-wrapper">
                <StepsStyle current={currentStep} progressDot={customDot}>
                    <StepStyle title={`Step ${currentStep} of 3`}/>
                    <StepStyle/>
                    <StepStyle/>
                    <StepStyle/>
                </StepsStyle>

                <div className="buttons-wrapper">
                    {currentStep > 1 && (
                        <OutlineButtonStyle
                            onClick={handlePreviousStep}
                            width="150px"
                            height="53px"
                        >
                            Back
                        </OutlineButtonStyle>
                    )}

                    {currentStep < 3 && (
                        <FilledButtonStyle
                            onClick={validateInfo}
                            buttonType="dark"
                            width="150px"
                            height="53px"
                        >
                            Next
                        </FilledButtonStyle>
                    )}

                    {currentStep === 3 && (
                        <FilledButtonStyle
                            onClick={() => validateInfo()}
                            buttonType="dark"
                            width="150px"
                            height="53px"
                        >
                            Submit
                        </FilledButtonStyle>
                    )}
                    <MessageModal
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                        handleOkClick={() => setCurrentPage("taxpayer-home")}
                        message="Thank you. Your Taxpayer Information has been saved and submitted."
                    />
                </div>
            </div>

            {CurrentTab}
        </TaxpayerInfoStepsStyle>
    );
};

export default TaxpayerInfoSteps;
