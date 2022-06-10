import { Form, Formik } from "formik";
import React,{useState} from "react";
import { ContentHeader, DashboardHeader } from "..";
import { InputBox, Loading } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";
import axios from "axios";
import { NewPaymentMethodStyle } from "./NewPaymentMethod.style";

type NewPaymentMethodProps = {
  setCurrentPage: (data: string) => void;
};

const NewPaymentMethod = (props: NewPaymentMethodProps) => {
  const { setCurrentPage } = props;
  const [loading,setLoading] = useState(false)
  const [errorMessage,setErrorMessage] = useState('')
  const handlePaymentMethodSubmit = (e:any) => {
    setLoading(true)
    const user: any = JSON.parse(localStorage.getItem("data") || "{}");
    const body = {
      beneficiary_name:e.benifieciaryName,
      routing_number:e.routingNumber,
      account_number:e.accountNumber,
      currency:e.currency,
      tax_number:e.taxId
    }

    axios
    .post("/v1/partners/createPartnerPayment/"+user.id,
    body,
    {
      headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` },
    })
    .then((res) => {
      setLoading(false)
      setCurrentPage("payment-method")
    })
    .catch((error) => {
      setLoading(false)
      setErrorMessage("Please fill all the fields")
    });  };
  return (
    <NewPaymentMethodStyle>
      <DashboardHeader
        heading="Add New Payment Method"
        backButtonText="Back to Payout Method"
        handleBackClick={() => setCurrentPage("payment-method")}
      />
      {loading&&<Loading/>}

      <ContentHeader heading="Account Information For ABC Organization" />

      <Formik
        initialValues={{
          benifieciaryName: "",
          routingNumber: "",
          accountNumber: "",
          currency: "",
          taxId: "",
        }}
        onSubmit={handlePaymentMethodSubmit}
      >
        {() => (
          <Form className="payment-method-form">
            <InputBox label="Beneficiary's Name" name="benifieciaryName" />
            <InputBox label="Routing Number" name="routingNumber" />
            <InputBox label="Account Number or IBAN" name="accountNumber" />
            <InputBox label="Currency" name="currency" />
            <InputBox label="Tax ID Number" name="taxId" />

            <div className="disclaimer-wrapper">
              <p>Disclaimer:</p>
              <p>
                If you do not fill out all of your tax and accounting
                information properly, the payment of your complete ticket
                revenue may not be possible.
              </p>
            </div>

            <FilledButtonStyle
              //onClick={() =>{}}
              buttonType="dark"
              width="250px"
              height="60px"
            >
              Add New Payment Method
            </FilledButtonStyle>
            {errorMessage&&<p style={{color:'red'}}>{errorMessage}</p>}
          </Form>
        )}
      </Formik>
    </NewPaymentMethodStyle>
  );
};

export default NewPaymentMethod;
