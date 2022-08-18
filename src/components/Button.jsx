import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom"

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

const Button = ({ buttonType, size ,value,...rest}) => {
  let sizeStyle ="";
  
  if (buttonType == "submitButton") {
    switch (size) {
      case "small":
        sizeStyle ="shadow h-12 w-28 bg-orange  text-white "
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
    else if (buttonType == "iconButton"){
      switch(size){
        case "small":
            sizeStyle =" "
            break;
        case "medium":
            sizeStyle =" "

        case "big":
            sizeStyle =" "
      }


    }

    // setValue(value)

    return (
      
      <button className={sizeStyle}> {value} </button>
    );
  }


export default Button;
