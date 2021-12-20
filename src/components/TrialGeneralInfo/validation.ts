import moment from "moment";
import * as yup from "yup";

export const TrialGeneralInfoValidationSchema = yup.object().shape({
  firstName: yup.string().required("Name is required"),
  lastName: yup.string().required("Name is required"),
  dob: yup.date()
    .transform((value) => {
      return value ? moment(value).toDate() : value;
    })
    .required("Date of birth is required"),
});
