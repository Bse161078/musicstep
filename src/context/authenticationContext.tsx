import React, {
  createContext,
  Dispatch,
  useContext,
  useEffect,
  useReducer,
} from "react";

type UserAction =
  | {
      type: "LOGIN_USER";
      payload: any;
    }
  | {
      type: "LOGOUT";
      payload: any;
    };

export type LoginContextType = {
  state: any;
  dispatch: Dispatch<UserAction>;
};

const initialContent: any = {
  isLoggedIn: false,
  authToken: "",
  data: {},
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
      localStorage.setItem("data", JSON.stringify(action.payload.data));
      localStorage.setItem("isLoggedIn", action.payload.isLoggedIn);

      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        authToken: action.payload.token,
        data: action.payload.data,
      };
    case "LOGOUT":
      localStorage.clear();
      debugger;
      return {
        ...state,
        isLoggedIn: false,
        authToken: "",
        data: {},
      };
    default:
      return state;
  }
};

export const LoginContextProvider = (props: any) => {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, initialContent);

  const token = localStorage.getItem("authToken");
  const PresistedData = JSON.parse(localStorage.getItem("data") + "");
  useEffect(() => {
    if (token !== undefined && token !== null) {
      // alert("in if")
      alert("local");
      dispatch({
        type: "LOGIN_USER",
        payload: {
          isLoggedIn: true,
          token: token,
          // data: PresistedData,
        },
      });
    }
  }, [token, PresistedData]);
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};
