import * as yup from "yup";

export const TrialInfoValidationSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .test(
      "len",
      "Must contain atleast 8 characters",
      (val) => (val || "").length > 7
    )
    .test("hasNumber", "Must contain a number", (val: any) => /\d/.test(val))
    .test("hasAlphabets", "Must contain an alphabet", (val: any) => /[a-zA-Z]/.test(val)),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});
