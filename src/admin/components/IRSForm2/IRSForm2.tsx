import {Form, Formik} from "formik";
import React, {useEffect} from "react";
import {ContentHeader} from "..";
import {InputBox} from "../../../components";
import {IRSForm2Style} from "./IRSForm2.style";
import TextField from "@mui/material/TextField/TextField";
import {DesktopDatePicker, LocalizationProvider} from "@mui/lab";
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import moment from "moment";
import { ValidationStep3} from "../TaxpayerInfoSteps/validation";

let formikForm: any = null;

const IRSForm2 = (props: any) => {

    let ref: any = React.createRef();


    const handleSubmit = () => {
        props.handleNextStep()
    };

    const handleChangeFrom = (newValue: Date | any) => {
        setDate(newValue);
    };
    const [date, setDate] = React.useState<Date>(
        new Date(),
    );

    useEffect(() => {
        const taxInfo = props.taxInfo;
        if (taxInfo && taxInfo.signature) formikForm.setFieldValue("signature", taxInfo.signature);

    }, [props.count])


    useEffect(()=>{
        if(props.buttonClicked!==0) ref.current.click();
    },[props.buttonClicked])


    return (
        <IRSForm2Style>
            <ContentHeader
                heading="IRS Substitute Form W-9"
                description="The following form is required by the U.S. Interval Revenue Service and is only available in U.S. English. Please complete in U.S. English. If you need help, see FAQs and IRS Form W-9 Instructions."
            />

            <h4 className="form-content-heading">content here</h4>

            <Formik
                initialValues={{signature: "", date: ""}}
                onSubmit={handleSubmit}
                validationSchema={ValidationStep3}
            >
                {(form) => {
                    formikForm = form;
                    return (
                        <Form className="form-wrapper">
                            <InputBox width="600px" name="signature" label="Your Signature"
                                      setSearch={(value: any) => props.onChangeSignature(value)}/>
                            <InputBox disabled width="600px" name="signDate" label="Sign Date"
                                      value={moment(new Date()).format("YYYY-MM-DD")}/>
                            <input
                                type="submit"
                                ref={ref}
                                value="Submit"
                                style={{display: "none"}}
                            ></input>
                        </Form>
                    )
                }}
            </Formik>

            <p className="form-details">Typing your name acts as your signature.</p>
            <p className="form-details">
                Note: Date & time of submission and your computer's IP will be recorded
                upon your submissions.
            </p>
        </IRSForm2Style>
    );
};

export default IRSForm2;
