import moment from "moment";
import * as yup from "yup";
import {date} from "yup/lib/locale";
import {end} from "@popperjs/core";

export const EventFormValidationSchema = yup.object().shape({


    title: yup.string().required("Title is required"),
    startdate: yup.date().min(new Date(Date.now() -86400000)).required("Start Date is required").nullable(),
    enddate: yup.date().min(new Date(Date.now() -86400000)).required("End Date is required").nullable(),
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
                const {startingTime,startdate,enddate} = this.parent;
                return isSameOrBefore(startingTime,startdate,enddate, value as any);
            }
        ),
    //   endingTime: yup.string(),
    venue: yup.string().required("Venue is required").nullable(),
    organizer: yup.string().required("Organizer is required").nullable(),
    genre: yup.string().required("Genre is required").nullable(),

});

const isSameOrBefore = (startingTime:string,startdate:string,enddate:string, endTime: string) => {
    // return moment(startTime, 'HH:mm').isSameOrBefore(moment(endTime, 'HH:mm'));
    // "h:mma"
    // return moment(startTime, 'h:mma').isSameOrBefore(moment(endTime, 'h:mma'));

    const startDate=new Date(moment(startdate).format("YYYY-MM-DD")+"T"+startingTime+":00");
    const endDate=new Date(moment(enddate).format("YYYY-MM-DD")+"T"+endTime+":00");

    return moment(endDate).isAfter(moment(startDate));
}