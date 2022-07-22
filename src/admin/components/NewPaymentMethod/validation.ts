import moment from "moment";
import * as yup from "yup";

export const CreatePaymentSchema = yup.object().shape({
    benifieciaryName: yup.string().required("Beneficiary's Name is required"),
    routingNumber: yup.string().required("Routing Number is required"),
    accountNumber: yup.string().required("Account Number or IBAN is required"),
    taxId: yup.string().required("Tax ID Number is required"),
    currency: yup.string().required("Currency is required"),
});
