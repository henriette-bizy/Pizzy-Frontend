import React from "react";
import { useState } from "react";
import {Link, Outlet} from "react-router-dom"


// class ButtonComponent extends React.Component{

// render(){

//     const bwidth = props.width;
//     // const height = props.height;
//     // const bgColor = props.color ? props.color : "orange"
//     // const color = props.color ? this.props.color: "default"
//     // const cursor = props.cursor ? this.props.cursor : "none"
//     // const borderRadius = this.props.borderRadius ? this.props.borderRadius : "none"
//     // const position = this.props.position ? this.props.position : "none";
//     // const margin = this.props.margin ? this.props.margin : "none"
//     // const float  = this.props.float ? this.props.float : "none"

//     let btnStyle = '$bwidth'
//     return (
//         <button>

//         </button>
//     )

const Button = ({ buttontype, size ,value,...rest}) => {
  let sizeStyle=""
  // let restStyles = Object.keys(...rest);
  // console.log(restStyles);
  if (buttontype == "submitButton") {
    switch (size) {
      
      case "small":
        
        sizeStyle =" mt-5 mr-2 shadow h-10 w-32 bg-orange  text-white align-center rounded "
        break;
      case "medium":
        sizeStyle ={...rest}+"shadow h-12 bg-orange w-[60%] text-white  " 
        break;
      case "big":
        sizeStyle = {...rest}+" shadow h-12  bg-orange  text-white"
        break
      default:
        sizeStyle ="shadow h-12 w-64 bg-orange  text-white"
    }
   }
    else if (buttontype == "iconButton"){
      // value = Outlet;
      switch(size){
        case "small":
            sizeStyle ="h-10 w-10 bg-lightorange rounded-full  mx-auto"
            break;
        case "medium":
            sizeStyle ="h-12 w-12 bg-lightorange rounded-full "

        case "big":
            sizeStyle =" "
      }

    }
    


    
    // setValue(value)

    return (
      
      <button className={sizeStyle}><span className="pr-10">{value}</span></button>
      
    );
  }


export default Button;
