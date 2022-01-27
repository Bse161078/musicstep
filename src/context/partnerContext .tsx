import React, { createContext, Dispatch, useContext, useReducer } from "react";

type PartnerAction =
  | {
      type: "SUBMIT_GENERAL_INFO";
      payload: any;
    }
  | {
      type: "SUBMIT_ORGANIZATION_INFO";
      payload: any;
    }
  | {
      type: "RESETFROM";
      payload: any;
    }
  | {
      type: "SUBMIT_TRIAL_BILLING";
      payload: any;
    };

export type PartnerContextType = {
  state: any;
  dispatch: Dispatch<PartnerAction>;
};

const initialContent: any = {
  id: "",
  firstName: "",
  lastName: "",
  emailAddress: "",
  countryCode: "",
  phoneNumber: "",
  organizationName: "",
  organizationType: "",
  organizationURL: "",
  yearlyEvents: 0,
  capacity: 0,
  // imageUrl: null,
  // isOrganizer: false,
  // role: "user",
  // isVerified: false,
  // billingInformation: null,
  // email: "",
  // firstName: "",
  // lastName: "",
  // dob: "",
  // id: "",
  // phoneNumber: "",
  // expiryDate: "",
  // cardNumber: "",
  // cvc: "",
};

export const PartnerContext = createContext<PartnerContextType>({
  state: {
    ...initialContent,
  },
  dispatch: () => undefined,
});
export const usePartnerContext = () => useContext(PartnerContext);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SUBMIT_GENERAL_INFO":
      return {
        ...state,
        id: action.payload.id,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        emailAddress: action.payload.emailAddress,
        countryCode: action.payload.countryCode,
        phoneNumber: action.payload.phoneNumber,
      };
    case "SUBMIT_ORGANIZATION_INFO":
      return {
        ...state,
        organizationName: action.payload.organizationName,
        organizationType: action.payload.organizationType,
        organizationURL: action.payload.organizationURL,
        yearlyEvents: action.payload.yearlyEvents,
        capacity: action.payload.capacity,
      };

    case "RESETFROM":
      return {
        ...state,
        id: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        countryCode: "",
        phoneNumber: "",
        organizationName: "",
        organizationType: "",
        organizationURL: "",
        yearlyEvents: 0,
        capacity: 0,
      };

    // case "SUBMIT_TRIAL_BILLING":
    //   return {
    //     ...state,
    //     cardNumber: action.payload.cardNumber,
    //     expiryDate: action.payload.date,
    //     cvc: action.payload.date,
    //   };
    default:
      return state;
  }
};

export const PartnerContextProvider = (props: any) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialContent);
  return (
    <PartnerContext.Provider value={{ state, dispatch }}>
      {children}
    </PartnerContext.Provider>
  );
};
