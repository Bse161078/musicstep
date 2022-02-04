import moment from "moment";
import * as yup from "yup";

export const BasicInfoFormValidationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  dateOfBirth: yup.string().required("DOB is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  // photo: yup.mixed().required("Photo is required"),
  bio: yup.string().required("Bio is required"),
  instagram: yup.string().required("Instagram is required"),
  facebook: yup.string().required("Facebook is required"),
  twitter: yup.string().required("Twitter is required"),
});
