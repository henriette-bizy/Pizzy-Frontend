import { Component } from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../useToken";


function ProtectedRouted({component:Component,...restProps}){

const isAuthenticated = getToken()

return (

    <Route
     {...restProps}
     render={(props)=> isAuthenticated ? <component {...props} />:<Navigate to ="/signIn" />} />
)
}
export default ProtectedRouted;

