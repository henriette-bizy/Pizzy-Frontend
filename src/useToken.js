import { useState } from "react";
import {_logIn} from './services/service'




export const getToken = () =>{

  console.log("we in the function");
  const tokenString = localStorage.getItem('token') || {}
  console.log(tokenString);
  // const userToken = JSON.parse(tokenString)
  
  // console.log(userToken, 'this si user token');

  if(Object.entries(tokenString).length > 0){  
  return tokenString.access_token;
   
  }
  return null;
  
}

export const saveToken = userToken =>{
  localStorage.setItem('token',JSON.stringify(userToken));
  // setToken(userToken.token);
};
