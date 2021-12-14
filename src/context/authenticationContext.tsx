import React, { createContext, Dispatch, useContext, useEffect, useReducer } from "react";

type UserAction =
  | {
      type: "LOGIN_USER";
      payload: any;
    }

export type LoginContextType = {
  state: any;
  dispatch: Dispatch<UserAction>;
};

const initialContent: any = {
    isLoggedIn: false,
    authToken: ""
};

export const LoginContext = createContext<LoginContextType>({
  state: {
    ...initialContent,
  },
  dispatch: () => undefined,
});
export const useLoginContext = () => useContext(LoginContext);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN_USER":
      localStorage.setItem("authToken", action.payload.token);
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        authToken: action.payload.token,
      };
    default:
      return state;
  }
};

export const LoginContextProvider = (props: any) => {
  const { children } = props;
  
  const [state, dispatch] = useReducer(reducer, initialContent);
  
  useEffect(()=>{
    const token = localStorage.getItem("authToken");
    if(token !== undefined && token !== null) {
      // alert("in if")
      dispatch({
        type: "LOGIN_USER",
        payload: {
          isLoggedIn: true,
          token: token
        }
      })
    }
  },[localStorage.getItem("authToken")])
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};
