import * as yup from "yup";

export const TrialInfoValidationSchema = yup.object().shape({
  countryCode: yup.string().required("Country code is required"),
  phoneNumber: yup.string().required("Phone number is required"),
});
