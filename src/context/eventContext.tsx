import React, { createContext, Dispatch, useContext, useReducer } from "react";

type EventAction =
  | {
      type: "SAVE";
      payload: any;
    }
  | {
      type: "REMOVE_EVENT_INFO";
      payload: any;
    };

export type EventContextType = {
  state: any;
  dispatch: Dispatch<EventAction>;
};

const initialContent: any = {
  title: "",
  date: "",
  startingTime: "",
  endingTime: "",
  country: "",
  state: "",
  city: "",
  venue: "",
  organizer: "",
  eventDescription: "",
  venuePhotoSameAsOrganizerPhoto: true,
  additionalPhotos: null,
};

export const EventContext = createContext<EventContextType>({
  state: {
    ...initialContent,
  },
  dispatch: () => undefined,
});
export const useEventContext = () => useContext(EventContext);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SAVE":
      alert("Save Event Info");
      console.log(action.payload);
      return {
        ...state,
        title: action.payload.title,
        date: action.payload.date,
        startingTime: action.payload.startingTime,
        endingTime: action.payload.endingTime,
        country: action.payload.country,
        state: action.payload.state,
        city: action.payload.city,
        venue: action.payload.venue,
        organizer: action.payload.organizer,
        eventDescription: action.payload.eventDescription,
        venuePhotoSameAsOrganizerPhoto:
          action.payload.venuePhotoSameAsOrganizerPhoto,
      };
    default:
      return state;
  }
};

export const EventContextProvider = (props: any) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialContent);
  return (
    <EventContext.Provider value={{ state, dispatch }}>
      {children}
    </EventContext.Provider>
  );
};
