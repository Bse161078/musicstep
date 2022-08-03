import moment from "moment";
import * as yup from "yup";

export const TrialGeneralInfoValidationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),

});
