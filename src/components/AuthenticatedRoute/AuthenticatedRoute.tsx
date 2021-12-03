import React from "react"
import { Redirect } from "react-router";

import { useLoginContext } from "../../context/authenticationContext";

const AuthenticatedRoute = ({children, redirectTo}: any) => {
    const { state: {
        isLoggedIn
    } } = useLoginContext();
    
    console.log("redirectTo: ", redirectTo)
    return !localStorage.getItem("authToken") ?  (
        <Redirect exact to={redirectTo} />
        ) : (
        children
    )
}

export default AuthenticatedRoute;