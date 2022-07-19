import moment from "moment";
import * as yup from "yup";

export const ValidationStep1 = yup.object().shape({


    name: yup.string().required("Name is required"),
    federalTaxClassification: yup.string().required("Tax classification is required"),
    payeeCode: yup.string().required("Payee code is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    zipCode: yup.string().required("Zip Code is required"),
});


export const ValidationStep3 = yup.object().shape({


    signature: yup.string().required("Signature is required"),
});