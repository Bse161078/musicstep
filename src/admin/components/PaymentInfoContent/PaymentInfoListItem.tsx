import React, {useState} from "react";
import {PaymentMethodDetails} from "..";
import {CalenderIcon, DeleteIcon} from "../../../assets";


import {PaymentInfoListItemStyle} from "./PaymentInfoContent.style";
import {MessageModal} from "../../../components/MessageModal";
import {BillingInformationFormStyle} from "../../../userDashboard/components/BillingInformationForm/BillingInformationForm.style";
import {FilledButtonStyle, OutlineButtonStyle} from "../../../styles/Common.style";

type PaymentInfoListItemProps = {
    setCurrentPage: (data: string) => void;
    payments: any;
    deletePartnerPayment: (id: string,index:number) => void
};


export const PaymentInfoListItem = (props: PaymentInfoListItemProps) => {
    const {setCurrentPage, payments, deletePartnerPayment} = props;
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false)
    const [isCancelModalVisible, setCancelModalVisible] = useState(false);


    return (
        payments.length > 0 && payments.map((payment: any,index:number) => {
            return (
                <PaymentInfoListItemStyle>
                    <div className="content-wrapper">
                        <p className="description">{payment.beneficiary_name}</p>
                        <h4 className="heading">
                            {payment.account_number}
                        </h4>
                        <p className="description">{payment.currency}</p>
                    </div>

                    <div className="team-role">{payment.routing_number}</div>

                    <div className="team-role">{payment.tax_number}</div>

                    <div className="action-buttons-wrapper" onClick={(e) => setCancelModalVisible(true)}>
                        <DeleteIcon/>
                        <span>
          {/* <CalenderIcon  /> */}
        </span>
                    </div>

                    <PaymentMethodDetails setCurrentPage={setCurrentPage} isModalVisible={isModalVisible}
                                          setIsModalVisible={setIsModalVisible}/>

                    <MessageModal
                        isModalVisible={isCancelModalVisible}
                        setIsModalVisible={setCancelModalVisible}
                        icon={<img src="/images/icons/cancel-icon.svg" alt="icon"/>}
                        heading="Delete payment information?"
                        message="Are you sure you want to delete this payment information?"
                        buttons={[
                            <OutlineButtonStyle
                                width="100%"
                                height="60px"
                                onClick={() => setCancelModalVisible(false)}
                            >
                                No
                            </OutlineButtonStyle>,
                            <FilledButtonStyle
                                width="100%"
                                height="60px"
                                onClick={() => {
                                    setCancelModalVisible(false);
                                    deletePartnerPayment(payment.id,index);
                                }}
                            >
                                Delete
                            </FilledButtonStyle>,
                        ]}
                    />
                </PaymentInfoListItemStyle>
            )
        })
    );
};
