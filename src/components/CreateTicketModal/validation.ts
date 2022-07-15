import moment from "moment";
import * as yup from "yup";

export const TicketFormValidationSchema = yup.object().shape({

  
    title: yup.string().required("Title is required"),
    numberOfTickets: yup.number().required("Number of tickets is required"),
    description: yup.string().required("Description is required"),
    price: yup.number()
    .typeError("Price  must be number")
    .min(1, "Price is required"),
    // .required("Price is required"),
    discount: yup.string()
    .min(1,"Discounts is required")
    .required("Discounts is required"),
});
