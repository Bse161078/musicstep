import moment from "moment";
import * as yup from "yup";

export const OrganizerFormValidationSchema = yup.object().shape({
  organizerName: yup.string().required("Name is required"),
  logo: yup.mixed().required("Logo is required"),
  coverPhoto: yup.mixed().required("Cover is required"),
});
