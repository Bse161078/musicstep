import moment from "moment";
import * as yup from "yup";

export const OrganizationDetailFormValidationSchema = yup.object().shape({
    organizationName: yup.string().required("Organization Name is required"),
    preferredCountry: yup.string().required("Preferred Country is required"),
    // photo: yup.string().required("Phone number is required"),
    // photo: yup.mixed().required("Photo is required"),
});
