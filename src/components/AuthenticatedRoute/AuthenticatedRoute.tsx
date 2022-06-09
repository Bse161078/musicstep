import React, { useEffect } from "react";
import { Redirect } from "react-router";

import { useLoginContext } from "../../context/authenticationContext";

const AuthenticatedRoute = ({ children, redirectTo }: any) => {
  const {
    state: { isLoggedIn },
  } = useLoginContext();

  useEffect(() => {}, []);

  return !isLoggedIn ? <Redirect exact to={redirectTo} /> : children;
};

export default AuthenticatedRoute;
