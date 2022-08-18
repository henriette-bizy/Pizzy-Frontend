import { Component } from "react";
import { Navigate,Outlet } from "react-router-dom";
import { getToken } from "../useToken";


const ProtectedRoute = ({component:Component,...restProps})=>{

const isAuthenticated = getToken()

return (
    // <Route  {...restProps}   element={(props)=> (isAuthenticated)!== null ? <component {...props} />:<Navigate to ="/signIn" />} />
    isAuthenticated!== null ? <Outlet/> :<Navigate to ="/signIn" />
)
}
export default ProtectedRoute;

