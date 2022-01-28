import moment from "moment";
import * as yup from "yup";

export const ForgotPasswordFormValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});
