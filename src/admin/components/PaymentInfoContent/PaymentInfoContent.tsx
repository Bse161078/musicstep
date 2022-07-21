import {Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {DashboardHeader} from "..";
import {Loading, MessageModal, SelectBox} from "../../../components";
import {FilledButtonStyle} from "../../../styles/Common.style";

import {PaymentInfoContentStyle} from "./PaymentInfoContent.style";
import {PaymentInfoListItem} from "./PaymentInfoListItem";
import axios from 'axios';

type PaymentInfoContentProps = {
    setCurrentPage: (data: string) => void;
};

const PaymentInfoContent = (props: PaymentInfoContentProps) => {
    const {setCurrentPage} = props;
    const handleFilterSubmit = () => {
    };
    const [isLoading, setLoading] = useState<any>();
    const [payments, setPayments] = useState<any>();
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

    useEffect(() => {
        getPaymentMethod()
    }, [])
    const getPaymentMethod = () => {
        setLoading(true);
        const user: any = JSON.parse(localStorage.getItem("data") || "{}")
        axios.get(`/v1/partners/createPartnerPayment/${user.id}`).then((res) => {
            setLoading(false);
            setPayments(res.data)
        }).catch((error) => {
            setLoading(false);
        })
    }


    const deletePartnerPayment = (id: string, index: number) => {
        console.log(payments);
        setLoading(true);
        axios.delete(`/v1/partners/partnerPayment/${id}`).then((res) => {
            setPayments(res.data);
            setSuccessModalVisible(true);
            setLoading(false);
            const tempPayments = JSON.parse(JSON.stringify(payments));
            tempPayments.splice(0, 1);
            setPayments(tempPayments)

        }).catch((error) => {
            setLoading(false);
        })
    }

    return (

        <PaymentInfoContentStyle>
            {isLoading && <Loading/>}
            <DashboardHeader
                heading="Payment Information"
                description="The money you make from your events will issued to you as a payout."
            />
            <div className="filter">
                Filter By Type
                <Formik initialValues={{type: ""}} onSubmit={handleFilterSubmit}>
                    {() => (
                        <Form>
                            <SelectBox options={[{key: "", value: "All"}]} name="type"/>

                        </Form>

                    )}

                </Formik>
                <FilledButtonStyle
                    onClick={() => setCurrentPage("payment-method")}
                    buttonType="dark"
                    width="250px"
                    height="60px"
                    className="button"
                >
                    Add New Payment Method
                </FilledButtonStyle>
            </div>

            <div className="table-wrapper">
                <div className="table-header">
                    <h3 className="header-title">Payment Methods</h3>
                    <h3 className="header-title">Routing Number</h3>
                    <h3 className="header-title">Tax Number</h3>
                </div>
                {payments &&
                <PaymentInfoListItem setCurrentPage={setCurrentPage} payments={payments}
                                     deletePartnerPayment={deletePartnerPayment}/>
                }
            </div>
            <MessageModal
                isModalVisible={isSuccessModalVisible}
                setIsModalVisible={setSuccessModalVisible}
                heading="Success"
                message="Payment info deleted."
            />
        </PaymentInfoContentStyle>
    );
};

export default PaymentInfoContent;
