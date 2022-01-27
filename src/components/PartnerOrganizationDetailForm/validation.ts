import moment from "moment";
import * as yup from "yup";

export const PartnerOrganizationDetailFormValidationSchema = yup
  .object()
  .shape({
    organizationName: yup.string().required("Organization Name is required"),
    organizationType: yup.string().required("Organization Type is required"),
    organizationURL: yup.string().required("Organization URL is required"),
    yearlyEvents: yup
      .number()
      .typeError("Yearly Events must be number")
      .min(1, "Yearly Events is required"),
    capacity: yup
      .number()
      .typeError("Capacity must be number")
      .min(1, "Capacity is required"),
  });
