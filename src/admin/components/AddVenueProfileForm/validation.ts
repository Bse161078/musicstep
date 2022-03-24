import moment from "moment";
import * as yup from "yup";

export const VenueFormValidationSchema = yup.object().shape({
  venueBio: yup.string().required("Bio is required"),
  name: yup.string().required("Name is required"),
  logo: yup.mixed().required("Logo is required"),
  coverPhoto: yup.mixed().required("Cover is required"),
  address: yup.string().required("Address is required"),
  location: yup.object().required("Location is required").nullable(),
});
