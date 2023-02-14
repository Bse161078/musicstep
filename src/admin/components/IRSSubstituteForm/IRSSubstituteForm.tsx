import {Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import {ContentHeader} from "..";
import {InputBox} from "../../../components";
import {IRSSubstituteFormStyle} from "./IRSSubstituteForm.style";
import {Radio} from "antd";
import {RadioButtonStyle} from "../RadioButton/RadioButton.style";
import {FormControl, Grid, Input, InputLabel} from "@mui/material";
import {IMaskInput} from "react-imask";

let formikForm: any = null;

interface State {
    textmask: string;
    numberformat: string;
}

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

const MaskEIN = React.forwardRef<HTMLElement, CustomProps>(
    function TextMaskCustom(props) {


        const {onChange, ...other} = props;
        return (
            <IMaskInput
                {...other}
                mask="#0-0000000"
                definitions={{
                    '#': /[1-9]/,
                }}
                onAccept={(value: any) => onChange({target: {name: props.name, value}})}
                overwrite
            />
        );
    },
);

const MaskSSN = React.forwardRef<HTMLElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const {onChange, ...other} = props;
        return (
            <IMaskInput
                {...other}
                mask="#00-00-0000"
                definitions={{
                    '#': /[1-9]/,
                }}
                onAccept={(value: any) => onChange({target: {name: props.name, value}})}
                overwrite
            />
        );
    },
);


const IRSSubstituteForm = (props: any) => {
    let ref: any = React.createRef();

    const [error, setError] = useState(false);


    const [ein, setEin] = React.useState<State>({
        textmask: '00-000000',
        numberformat: '1320',
    });

    const [ssn, setSSN] = React.useState<State>({
        textmask: '000-00-0000',
        numberformat: '1320',
    });


    const handleFormSubmit = (event: any, form: any) => {
        props.handleNextStep()
    };


    useEffect(() => {
        if (props.buttonClicked !== 0) {
            if(!ssn.textmask && !ein.textmask){
                setError(true)
            } else if (ssn.textmask && ssn.textmask==='000-00-0000' ) {
                if(!ein.textmask || (ein.textmask.length<10)){
                    setError(true)
                }else{
                    props.handleNextStep();
                    setError(false);

                }
            }else if (ein.textmask && ein.textmask==='00-000000' ) {
                if(!ssn.textmask || (ssn.textmask.length<11)){
                    setError(true)
                }else{
                    props.handleNextStep();
                    setError(false);

                }
            } else {
                props.handleNextStep();
                setError(false);
            }
        }
    }, [props.buttonClicked])

    useEffect(() => {
        const taxInfo = props.taxInfo;
        if (taxInfo && taxInfo.number) formikForm.setFieldValue("textmask", taxInfo.number);
        if (props.federalTaxClassification === "Individual/sole proprietor or LLC(Single member)") {
            setSSN({...ssn, textmask: taxInfo.number})
        } else {
            setEin({...ein, textmask: taxInfo.number})

        }
    }, [props.count])


    const handleChangeEIN = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChangeInput(event.target.value)
        setEin({
            ...ein,
            [event.target.name]: event.target.value,
        });
    };

    const handleChangeSSN = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChangeInput(event.target.value)
        setSSN({
            ...ssn,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <IRSSubstituteFormStyle>
            <ContentHeader
                heading="IRS Substitute Form W-9"
                description="The following form is required by the U.S. Interval Revenue Service and is only available in U.S. English. Please complete in U.S. English. If you need help, see FAQs and IRS Form W-9 Instructions."
            />

            <h4 className="content-desc-heading">
                Taxpayer Identification Number (TIN)
            </h4>
            <Formik initialValues={{id: ""}}
                    onSubmit={handleFormSubmit}>
                {(form) => {
                    formikForm = form;
                    return (
                        <Form>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Radio.Group defaultValue={0} value={
                                        props.federalTaxClassification === "Individual/sole proprietor or LLC(Single member)" ? 0 : 1}>
                                        <Radio value={0}>
                                            <span className="radio-description">SSN</span>
                                        </Radio>
                                        <Radio value={1}>
                                            <span className="radio-description">EIN</span>
                                        </Radio>
                                    </Radio.Group>
                                </Grid>
                                <Grid item xs={12} style={{marginTop: 10}}>
                                    <FormControl variant="standard" style={{width: "40%"}}>
                                        <>
                                            <Input
                                                value={
                                                    props.federalTaxClassification === "Individual/sole proprietor or LLC(Single member)" ?
                                                        ssn.textmask : ein.textmask}
                                                onChange={props.federalTaxClassification === "Individual/sole proprietor or LLC(Single member)" ?
                                                    handleChangeSSN : handleChangeEIN}
                                                name="textmask"
                                                id="formatted-text-mask-input"
                                                inputComponent={props.federalTaxClassification === "Individual/sole proprietor or LLC(Single member)" ?
                                                    MaskSSN : MaskEIN as any}
                                                style={{width: "100%"}}
                                                error={error}
                                                fullWidth
                                            />
                                            <p style={{
                                                color: "red",
                                                marginTop: 10
                                            }}>{error && "Tax number is not correct"}</p>
                                        </>
                                    </FormControl>

                                </Grid>
                            </Grid>
                        </Form>
                    )
                }
                }
            </Formik>
        </IRSSubstituteFormStyle>
    );
};

export default IRSSubstituteForm;
