import moment from "moment";
import * as yup from "yup";

export const OrganizationDetailFormValidationSchema = yup.object().shape({
  organizationName: yup.string().required("organization Name is required"),
  prefferedCountry: yup.string().required("Preffered Countryis required"),
  // photo: yup.string().required("Phone number is required"),
  // photo: yup.mixed().required("Photo is required"),
});
