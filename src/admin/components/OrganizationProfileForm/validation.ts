import moment from "moment";
import * as yup from "yup";

export const OrganizerFormValidationSchema = yup.object().shape({
  organizerBio: yup.string().required("Bio is required"),
  logo: yup.mixed().required("Logo is required"),
  coverPhoto: yup.mixed().required("Cover is required"),
});
