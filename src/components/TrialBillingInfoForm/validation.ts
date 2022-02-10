import * as yup from "yup";

export const TrialBillingInfoValidationSchema = yup.object().shape({
  nameOnCard: yup.string().required("Name is required"),
  cardNumber: yup.string().required("Card number is required").min(15).max(16),
  date: yup
    .string()
    .required("Date is required")
    .matches(
      /^(0[1-9]|1[0-2]|[1-9])\/(2[2-9]|3[0-9]|20[2-9][2-9]|20[3-9][0-9])$/,
      "Please enter a valid expiry date"
    ),
  // cvc: yup.number().required("cvc is required").max(3)
  cvc: yup
    .number()
    .test(
      "len",
      "Must be exactly 3 digit",
      (val) => val?.toString().length === 3
    ),
});
