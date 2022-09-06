import React, { useEffect } from "react";
import {Redirect, useHistory} from "react-router";

import { useLoginContext } from "../../context/authenticationContext";

const AuthenticatedRoute = ({ children, redirectTo }: any) => {
  const {
    state: { isLoggedIn,initial },
  } = useLoginContext();

    const history = useHistory();



    useEffect(() => {}, []);

  console.log("assad = ",isLoggedIn,"  ",redirectTo);

  if(!initial){
      return (!isLoggedIn) || history.location.pathname==="/partner-signup" ? <Redirect exact to={redirectTo} /> : children;
  }else{
    return null;
  }

};

export default AuthenticatedRoute;
