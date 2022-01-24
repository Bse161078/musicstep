import moment from "moment";
import * as yup from "yup";

export const PartnerSignupFormValidationSchema = yup.object().shape({
  firstName: yup.string().required("Name is required"),
  lastName: yup.string().required("Name is required"),
  emailAddress: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  // countryCode: yup.string().required("Country code is required"),
  phoneNumber: yup.string().required("Phone number is required"),
});
