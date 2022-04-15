import moment from "moment";
import * as yup from "yup";

export const BasicInfoFormValidationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  dateOfBirth: yup.string().required("DOB is required").nullable(),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  // photo: yup.mixed().required("Photo is required"),
  // bio: yup.string().required("Bio is required").nullable(),
  // instagram: yup.string().required("Instagram is required").nullable(),
  // facebook: yup.string().required("Facebook is required").nullable(),
  // twitter: yup.string().required("Twitter is required").nullable(),
});
