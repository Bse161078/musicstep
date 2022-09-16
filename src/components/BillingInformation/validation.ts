import moment from "moment";
import * as yup from "yup";
import {date} from "yup/lib/locale";

export const BillingValidationSchema = yup.object().shape({


    nameOnCard: yup.string().required("Name on card is required"),
    cardNumber: yup.string().required("Card number is required"),
    cardMonth: yup.string().required("Expiry date is required"),
    cvc: yup.string().required("CVC is required"),
});
