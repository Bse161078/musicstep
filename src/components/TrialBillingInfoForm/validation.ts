import * as yup from "yup";

export const TrialBillingInfoValidationSchema = yup.object().shape({
  nameOnCard: yup.string().required("Name is required"),
  cardNumber: yup.string().required("Card number is required").min(15).max(16),
  date: yup.string().required("Date is required"),
  cvc: yup.number().required("cvc is required").max(3)
});
