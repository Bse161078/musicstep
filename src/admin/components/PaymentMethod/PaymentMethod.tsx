import { Form, Formik } from "formik";
import React, {useEffect, useState} from "react";

import { CheckboxWithIcon, ContentHeader, DashboardHeader } from "..";
import { SelectBox } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";
import { PaymentMethodStyle } from "./PaymentMethod.style";
import axios from "axios";

type PaymentMethodProps = {
  setCurrentPage: (data: string) => void;
};

const PaymentMethod = (props: PaymentMethodProps) => {
  const { setCurrentPage } = props;
    const [isLoading, setLoading] = useState<any>();
    const [payments, setPayments] = useState<any>();
    const [count,setCount]=useState(0);

    useEffect(() => {
        getPaymentMethod()
    }, [])
    const getPaymentMethod = () => {
        setLoading(true);
        const user: any = JSON.parse(localStorage.getItem("data") || "{}")
        axios.get(`/v1/partners/createPartnerPayment/${user.id}`).then((res) => {
            setLoading(false);
            setPayments(res.data);
            setCount(count+1);
        }).catch((error) => {
            setLoading(false);
        })
    }

  const handleSubmit = () => {
    setCurrentPage("new-payment-method");
  };

    const paymentSelectValues=payments  && payments.map((payment:any)=>payment.beneficiary_name);
    const paymentSelectOptions=payments  && payments.map((payment:any)=>({key:payment.beneficiary_name,value:payment.beneficiary_name}));

    return (
    <PaymentMethodStyle>
      <DashboardHeader
        heading="Payout Method"
        description="You are using MusicPass Processing, our default payment process."
        backButtonText="Back To Payment Information"
        handleBackClick={() => setCurrentPage("info-content")}
      />

      <ContentHeader heading="Send Payouts To" />
      <Formik initialValues={{ sendTo: "" }} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form className="send-payment-form">
            <SelectBox
              width="fill"
              name="sendTo"
              options={paymentSelectOptions}
              values={paymentSelectValues}
              setFieldValue={setFieldValue}
            />
            <FilledButtonStyle
              onClick={() => setCurrentPage("new-payment-method")}
              buttonType="dark"
              width="270px"
              height="60px"
            >
              Add New Payment Method
            </FilledButtonStyle>
          </Form>
        )}
      </Formik>

      {/*<ContentHeader*/}
        {/*heading="Payout Schedule"*/}
        {/*description="Manage when you get paid for your events. MusicPass typically issues payouts after each event ends, but you can apply receive scheduled payouts instead. Changes to your schedule apply to all current and future events."*/}
      {/*/>*/}

      {/*<div className="schedule-checks-wrapper">*/}
        {/*<CheckboxWithIcon />*/}
        {/*<CheckboxWithIcon />*/}
        {/*<CheckboxWithIcon />*/}
      {/*</div>*/}
    </PaymentMethodStyle>
  );
};

export default PaymentMethod;
