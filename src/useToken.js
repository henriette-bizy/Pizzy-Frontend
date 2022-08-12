import { useState } from "react";
import { Button } from "react-scroll";
import {_logIn} from './services/service'

function useToken(){

const [token, setToken] = useState();

const getToken = () =>{
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString)
  return userToken?.token 
}




const saveToken = userToken =>{
  localStorage.setItem('token',JSON.stringify(userToken));
  setToken(userToken.token);
};



    return{
      setToken:saveToken,token
}
}


export default useToken;