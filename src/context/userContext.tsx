import React, { createContext, Dispatch, useContext, useReducer } from "react";

type UserAction = | {
  type: "SUBMIT_EMAIL";
  payload: any;
} | {
    type: "SUBMIT_GENERAL_INFO";
    payload: any;
};

export type UserContextType = {
  state: any;
  dispatch: Dispatch<UserAction>;
};

const initialContent: any = {
  imageUrl: null,
  isOrganizer: false,
  role: "user",
  isVerified: false,
  billingInformation: null,
  email: "",
  firstName: "",
  lastName: "",
  dob: "",
  id: "",
};

export const UserContext = createContext<UserContextType>({
  state: {
    ...initialContent,
  },
  dispatch: () => undefined,
});
export const useUserContext = () => useContext(UserContext);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SUBMIT_EMAIL":
      return {
        ...state,
        email: action.payload.email,
        id: action.payload.id
      };

    case "SUBMIT_GENERAL_INFO":
        return {
            ...state,
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            dob: action.payload.dob
        }
    default:
      return state;
  }
};

export const UserContextProvider = (props: any) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialContent);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
