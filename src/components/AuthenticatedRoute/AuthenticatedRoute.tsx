import React, { useEffect } from "react";
import {Redirect, useHistory} from "react-router";

import { useLoginContext } from "../../context/authenticationContext";

const AuthenticatedRoute = ({ children, redirectTo }: any) => {
  const {
    state: { isLoggedIn },
  } = useLoginContext();

    const history = useHistory();



    useEffect(() => {}, []);

  console.log("assad = ",history.location)
  return !isLoggedIn || history.location.pathname==="/partner-login" ? <Redirect exact to={redirectTo} /> : children;
};

export default AuthenticatedRoute;
