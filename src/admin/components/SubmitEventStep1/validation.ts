import moment from "moment";
import * as yup from "yup";
import { date } from "yup/lib/locale";

export const EventFormValidationSchema = yup.object().shape({


  title: yup.string().required("Title is required"),
  date: yup.date().min(new Date()).required("Event Date is required").nullable(),
  startingTime: yup.string()
    .test(
      'not empty',
      'Start time cant be empty',
      function (value) {
        return !!value;
      }
    ).nullable(),
  endingTime: yup.string().required("End Time is required")
    .test(
      'not empty',
      'End time cant be empty',
      function (value) {
        return !!value;
      }
    )
    .nullable()
    .test(
      "start_time_test",
      "End time must be after start time",
      function (value) {
        //   const parent :any = this.parent;  
        const { startingTime } = this.parent;
        return isSameOrBefore(startingTime, value as any);
      }
    ),
  //   endingTime: yup.string(),
  country: yup.string().required("Country is required").nullable(),
  state: yup.string().required("State is required").nullable(),
  city: yup.string().required("City is required").nullable(),
  venue: yup.string().required("Venue is required").nullable(),
  organizer: yup.string().required("Organizer is required").nullable(),
  eventDescription: yup.string().required("Event Description is required"),
});

const isSameOrBefore = (startTime: string, endTime: string) => {
  // return moment(startTime, 'HH:mm').isSameOrBefore(moment(endTime, 'HH:mm'));
  // "h:mma"
  // return moment(startTime, 'h:mma').isSameOrBefore(moment(endTime, 'h:mma'));
  return moment(endTime, 'h:mma').isAfter(moment(startTime, 'h:mma'));
}