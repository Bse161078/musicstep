import {message} from "antd";
import React, {useState, useEffect} from "react";
import {ReservationConfirmedModal} from "..";
import {ModalWrapper} from "../ModalWrapper";
import {CheckingAvailablityModalStyle} from "./CheckingAvailablityModal.style";
import {FilledButtonStyle} from "../../../../styles/Common.style";
import {useHistory} from "react-router-dom";
import {InputBox} from "../../../../components/InputBox";
import {Form, Formik} from "formik";
import {BillingValidationSchema} from "../../../../components/BillingInformation/validation";
import axios from "axios";
import * as yup from "yup";

type CheckingAvailablityModalProps = {
    isModalVisible?: boolean;
    setIsModalVisible?: any;
    message?: string;
    isReservationConfirmedModalVisible?: any;
    setIsReservationConfirmedModalVisible?: any;
    event?: any;
    ticketIndex?: number;
    buyCredit?: any;
    isBuyCredit?:any;
};

const CheckingAvailablityModal = (props: CheckingAvailablityModalProps) => {
    const history = useHistory()
    const buyCredit = (credit:number) => {
        history.push({
            pathname: `/create-credit-payment`,
            state: {buyCredit: credit}
        });

    }


    const handleBillingFormSubmit = (e: any) => {
        buyCredit(e.numberOfCredits)
    };

    const {
        isModalVisible,
        setIsModalVisible,
        message,
        isReservationConfirmedModalVisible,
        setIsReservationConfirmedModalVisible,
        event,
        ticketIndex,
        isBuyCredit
    } = props;

    return (
        <>
            <ModalWrapper
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                isFooter={false}
            >
                {message === "Not Enough credits" &&
                    <CheckingAvailablityModalStyle>
                        <h1>Buy Credit</h1>
                        <Formik
                            validationSchema={yup.object().shape({
                                numberOfCredits: yup.string().required("Number of credits is required"),
                            })}
                            initialValues={{
                                numberOfCredits: "",
                            }}
                            onSubmit={handleBillingFormSubmit}
                        >
                            {() => (
                                <Form className="form-wrapper">
                                    <InputBox label="Number of credits" type="number" name="numberOfCredits"/>
                                    <div style={{marginTop:20}}>
                                    <FilledButtonStyle>Buy Credits</FilledButtonStyle>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </CheckingAvailablityModalStyle>
                }
                {message === "Not Enough credits" ? '' : <img alt="loading" src="/images/loading.svg"/>}
            </ModalWrapper>
            {
                !isBuyCredit &&  <ReservationConfirmedModal
                isModalVisible={isReservationConfirmedModalVisible}
                setIsModalVisible={setIsReservationConfirmedModalVisible}
                event={event}
                ticketIndex={ticketIndex}
            />
            }
        </>
    );
};
export default CheckingAvailablityModal;
