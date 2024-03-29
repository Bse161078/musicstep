import {Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {InputBox, SelectBox} from "../../../components";

import {TaxpayerFormStyle} from "./TaxpayerForm.style";
import {ValidationStep1} from "../TaxpayerInfoSteps/validation";
import PayeeCodeInfoModal from "../Modals/PayeeCodeInfo/PayeeCodeInfoModal";
let formikForm: any = null;

const TaxpayerForm = (props: any) => {
    let ref: any = React.createRef();

    const [showPayeeInfo,setShowPayeeInfo]=useState(false);

    const handleTaxpayerSubmit = (event: any, form: any) => {
        props.handleNextStep()
    };

    const taxCollectionList = ["Federal Tax Classification", "C Corporation", "S Corporation", "Partnership", "Trust/estate",
        "LLC (C Corporation)", "LLC (Partnership)", "LLC (S Corporation)", "Individual/sole proprietor or LLC(Single member)"
        , "Other", "Exempt payee"];
    const payeeCodeList = ["Exempt payee codee (if any)", "N/A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]


    useEffect(()=>{
        if(props.buttonClicked!==0) ref.current.click();
    },[props.buttonClicked])

    useEffect(()=>{
        const taxInfo=props.taxInfo;
        if(taxInfo && taxInfo.name) formikForm.setFieldValue("name", taxInfo.name);
        if(taxInfo && taxInfo.federalTaxClassification) formikForm.setFieldValue("federalTaxClassification", taxInfo.federalTaxClassification);
        if(taxInfo && taxInfo.payeeCode) formikForm.setFieldValue("payeeCode", taxInfo.payeeCode);
        if(taxInfo && taxInfo.address) formikForm.setFieldValue("address", taxInfo.address);
        if(taxInfo && taxInfo.city) formikForm.setFieldValue("city", taxInfo.city);
        if(taxInfo && taxInfo.state) formikForm.setFieldValue("state", taxInfo.state);
        if(taxInfo && taxInfo.zipCode) formikForm.setFieldValue("zipCode", taxInfo.zipCode);

    },[props.count]);




    const taxInfo=props.taxInfo;


    return (
        <TaxpayerFormStyle>
            <Formik
                initialValues={{
                    name: "",
                    federalTaxClassification: "Federal Tax Classification",
                    payeeCode: "Exempt payee codee (if any)",
                    address: "",
                    city: "",
                    state: "",
                    zipCode: "",
                }}
                validationSchema={ValidationStep1}
                onSubmit={handleTaxpayerSubmit}
            >
                {(form) => {
                    formikForm = form;
                    return (
                    <Form className="taxpayer-form-wrapper">
                        <InputBox width="600px" label="Name" name="name"

                                  setSearch={(value:any)=>props.onChangeInput(form)}/>
                        <SelectBox
                            width={"600px"}
                            label="Federal Tax Classification"
                            name="federalTaxClassification"
                            options={[]}
                            defaultValue={taxInfo.federalTaxClassification?taxInfo.federalTaxClassification:"Federal Tax Classification"}
                            values={taxCollectionList}
                            setFieldValue={form.setFieldValue}
                            handleSelectBoxChange={(e: any) => {
                                props.onChangeInput( form);
                            }}
                        />
                        <SelectBox
                            width={"600px"}
                            label="Payee Code"
                            name="payeeCode"
                            options={[]}
                            defaultValue={taxInfo && taxInfo.payeeCode?taxInfo.payeeCode:"Exempt payee codee (if any)"}
                            values={payeeCodeList}
                            setFieldValue={form.setFieldValue}
                            handleSelectBoxChange={(e: any) => {
                                props.onChangeInput( form);
                            }}
                        />
                        <span className="description-code">
                            See description of each code <span  style={{cursor:"pointer"}} onClick={(e)=>setShowPayeeInfo(true)}>here</span>.
            </span>

                        <InputBox label="Address" name="address"
                                  setSearch={(value:any)=>props.onChangeInput( form)}/>
                        <div className="inputs-wrapper">
                            <InputBox  label="City" name="city"
                                      setSearch={(value:any)=>props.onChangeInput(form)}
                            />
                            <InputBox label="State" name="state"
                                      setSearch={(value:any)=>props.onChangeInput( form)}/>
                            <InputBox label="Zip Code" name="zipCode"
                                      setSearch={(value:any)=>props.onChangeInput(form)}/>
                        </div>
                        <input
                            type="submit"
                            ref={ref}
                            value="Submit"
                            style={{display: "none"}}
                        ></input>
                    </Form>
                )}}
            </Formik>
            <PayeeCodeInfoModal
                setIsModalVisible={setShowPayeeInfo}
                isModalVisible={showPayeeInfo}
            />
        </TaxpayerFormStyle>
    );
};

export default TaxpayerForm;
