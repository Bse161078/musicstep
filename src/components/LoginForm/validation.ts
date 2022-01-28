import moment from "moment";
import * as yup from "yup";

export const LoginFormValidationSchema = yup.object().shape({
  userName: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
