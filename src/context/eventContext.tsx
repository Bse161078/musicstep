import React, { createContext, Dispatch, useContext, useReducer } from "react";

type EventAction =
  | {
      type: "SAVE_EVENT";
      payload: any;
    }
  | {
      type: "SAVE_TICKET";
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
  date: new Date(),
  startingTime: new Date().toTimeString().substring(0, 5),
  endingTime: new Date().toTimeString().substring(0, 5),
  country: null,
  state: null,
  city: null,
  venue: "",
  organizer: "",
  eventDescription: "",
  eventPhotoSameAsOrganizerPhoto: true,
  additionalPhotos: null,
  selectedOrganizerId: "",
  organizersList: [],
  previewVenuePhoto: [],
  tickets: [],
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
    case "SAVE_EVENT":
      return {
        ...state,
        title: action.payload.data.title,
        date: action.payload.data.date,
        startingTime: action.payload.data.startingTime,
        endingTime: action.payload.data.endingTime,
        country: action.payload.data.country,
        state: action.payload.data.state,
        city: action.payload.data.city,
        venue: action.payload.data.venue,
        organizer: action.payload.data.organizer,
        eventDescription: action.payload.data.eventDescription,
        additionalPhotos: action.payload.data.additionalPhotos,
        eventPhotoSameAsOrganizerPhoto:
          action.payload.data.eventPhotoSameAsOrganizerPhoto,
        selectedOrganizerId: action.payload.selectedOrganizerId,
        organizersList: action.payload.organizersList,
        previewVenuePhoto: action.payload.previewVenuePhoto,
      };
    case "SAVE_TICKET":
      return {
        ...state,
        tickets: action.payload.tickets,
      };
    case "REMOVE_EVENT_INFO":
      return {
        ...state,
        title: "",
        date: new Date(),
        startingTime: new Date().toTimeString().substring(0, 5),
        endingTime: new Date().toTimeString().substring(0, 5),
        country: null,
        state: null,
        city: null,
        venue: "",
        organizer: "",
        eventDescription: "",
        eventPhotoSameAsOrganizerPhoto: true,
        additionalPhotos: null,
        selectedOrganizerId: "",
        organizersList: [],
        previewVenuePhoto: [],
        tickets: [],
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
