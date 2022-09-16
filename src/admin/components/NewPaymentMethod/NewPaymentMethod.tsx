import { Form, Formik } from "formik";
import React, { useState } from "react";
import { ContentHeader, DashboardHeader } from "..";
import { InputBox, Loading, SelectBox } from "../../../components";
import { FilledButtonStyle } from "../../../styles/Common.style";
import axios from "axios";
import { NewPaymentMethodStyle } from "./NewPaymentMethod.style";
import { TicketFormValidationSchema } from "../../../components/CreateTicketModal/validation";
import { CreatePaymentSchema } from "./validation";
import { currencies } from "currencies.json";
type NewPaymentMethodProps = {
  setCurrentPage: (data: string) => void;
};

const NewPaymentMethod = (props: NewPaymentMethodProps) => {
  const { setCurrentPage } = props;
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("Bank");
  const [Currency, setCurrency] = useState(currencies.map((el) => el.code));
  const [selectedCurrency, setselectedCurrency] = useState("Currency");

  const [errorMessage, setErrorMessage] = useState("");
  const handlePaymentMethodSubmit = (e: any) => {
    setLoading(true);
    const user: any = JSON.parse(localStorage.getItem("data") || "{}");
    const body = {
      beneficiary_name: e.benifieciaryName,
      routing_number: e.routingNumber,
      account_number: e.accountNumber,
      currency: selectedCurrency,
      tax_number: e.taxId,
      type,
    };

    axios
      .post("/v1/partners/createPartnerPayment/" + user.id, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setCurrentPage("payment-method");
      })
      .catch((error) => {
        setLoading(false);
        setErrorMessage("Please fill all the fields");
      });
  };
  return (
    <NewPaymentMethodStyle>
      <DashboardHeader
        heading="Add New Payment Method"
        backButtonText="Back to Payout Method"
        handleBackClick={() => setCurrentPage("payment-method")}
      />
      {loading && <Loading />}

      <ContentHeader heading="Account Information For ABC Organization" />

      <Formik
        initialValues={{
          type: "Bank",
          benifieciaryName: "",
          routingNumber: "",
          accountNumber: "",
          currency: "",
          taxId: "",
        }}
        validationSchema={CreatePaymentSchema}
        onSubmit={handlePaymentMethodSubmit}
      >
        {() => (
          <Form className="payment-method-form">
            <SelectBox
              width="fill"
              name="Bank"
              options={[
                { key: "Bank", value: "Bank" },
                { key: "Paypal", value: "Paypal" },
              ]}
              values={["Bank", "Paypal"]}
              label="Type"
              handleSelectBoxChange={(value) => setType(value)}
            />
            <InputBox label="Beneficiary's Name" name="benifieciaryName" />
            <InputBox label="Routing Number" name="routingNumber" />
            <InputBox label="Account Number or IBAN" name="accountNumber" />
            {/* <InputBox label="Currency" name="accountNumber" /> */}

            <InputBox label="Currency" name="currency" />
            {/* <SelectBox
              width="fill"
              name="currency"
              options={Currency}
              values={Currency}
              label="Currency"
              defaultValue="Currency "
              handleSelectBoxChange={(value) => setselectedCurrency(value)}
            /> */}
            <InputBox label="Tax ID Number" name="taxId" />
            <FilledButtonStyle
              //onClick={() =>{}}
              buttonType="dark"
              width="250px"
              height="60px"
            >
              Add New Payment Method
            </FilledButtonStyle>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            <div className="disclaimer-wrapper">
              <p>Disclaimer:</p>
              <p>
                If all tax and accounting information is not filled out entirely
                and accurately, payments may not be processed.
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </NewPaymentMethodStyle>
  );
};

export default NewPaymentMethod;
