import moment from "moment";
import * as yup from "yup";

export const VenueFormValidationSchema = yup.object().shape({
  venueBio: yup.string().required("Bio is required"),
  logo: yup.mixed().required("Logo is required"),
  coverPhoto: yup.mixed().required("Cover is required"),
  locations: yup.string().required("Location is required"),
});
