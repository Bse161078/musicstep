import moment from "moment";
import * as yup from "yup";
import { date } from "yup/lib/locale";

export const EventFormValidationSchema = yup.object().shape({

  
    title: yup.string().required("title is required"),
    // date: yup.string().required("date is required"),
    date: yup.date().min(new Date()).required("date is required"),
    // startingTime: yup.string().required("Start time is required") 
    // .matches(
    //   /^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/,
    //   "Invalid format (HH:MM am/pm)"
    // )
    // ,
    // endingTime:yup.string().required("End time is required") 
    // .matches(
    //   /^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/,
    //   "Invalid format (HH:MM am/pm)"
    // ),
    startingTime: yup.string().matches(
      /^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/,
      "Invalid format (HH:MM am/pm)"
    )
    .test(
        'not empty',
        'Start time cant be empty',
        function(value) {
          return !!value;
        }
      ),
   endingTime: yup.string().matches(
    /^((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))$/,
    "Invalid format (HH:MM am/pm)"
  )
  .test(
    'not empty',
    'End time cant be empty',
    function(value) {
      return !!value;
    }
  )
  .test(
    "start_time_test",
    "End time must be after start time",
    function(value){
    //   const parent :any = this.parent;  
      const { startingTime } = this.parent;
      return isSameOrBefore(startingTime,value as any);
    }
  ),
//   endingTime: yup.string(),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    venue: yup.string().required("Venue is required"),
    organizer: yup.string().required("Organizer is required"),
    eventDescription: yup.string().required("Event Description is required"), 
});

const isSameOrBefore = (startTime:string, endTime:string) => {
    // return moment(startTime, 'HH:mm').isSameOrBefore(moment(endTime, 'HH:mm'));
    // "h:mma"
    // return moment(startTime, 'h:mma').isSameOrBefore(moment(endTime, 'h:mma'));
    return moment(endTime, 'h:mma').isAfter(moment(startTime, 'h:mma'));
  }