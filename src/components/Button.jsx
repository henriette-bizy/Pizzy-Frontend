import React from "react";
import { useState } from "react";
import {Link, Outlet} from "react-router-dom"


const Button = ({ buttontype, size ,value,position,link,...rest}) => {
  let sizeStyle=""
  // let restStyles = Object.keys(...rest);
  // console.log(restStyles);
  if (buttontype == "submitButton") {
    switch (size) {
      
      case "small":
        
        sizeStyle =" mt-5 mr-2 shadow h-10 w-32 bg-orange  text-white align-center rounded "
        break;
      case "medium":
        sizeStyle ="shadow h-12 bg-lightorange w-[60%] text-white " 
        break;
      case "big":
        sizeStyle = "shadow h-12  bg-lightorange w-[80%] "+position;
        break
      default:
        sizeStyle ="shadow h-12 w-64 bg-orange  text-white"
    }
   }
    else if (buttontype == "iconButton"){
      // value = Outlet;
      switch(size){
        case "small":
            sizeStyle ="h-10 w-10 bg-lightorange rounded-full pl-3 "+position;
            break;
        case "medium":
             
            sizeStyle ="h-12 w-12 bg-lightorange rounded-full pl-3 "+position;
            break;
        case "big":
            sizeStyle =" "
      }

    }
    


    
    // setValue(value)
   console.log(sizeStyle);
   console.log(link);
    return (
      
      <button className={sizeStyle} {...rest}><Link to={link}><span className="">{value}</span></Link></button>
      
    );
  }


export default Button;
