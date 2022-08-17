import React from "react";
import { useState } from "react";

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

const Button = ({ buttonType, size ,value}) => {
  let sizeStyle ="";
  
  if (buttonType == "submitButton") {
    switch (size) {
      case "small":
        sizeStyle ="shadow h-12 w-32 bg-orange  text-white "
        break;
      case "medium":
        sizeStyle ="shadow h-12 w-64 bg-orange  text-white  "
        break;
      case "big":
        sizeStyle =" shadow h-12 w-68 bg-orange  text-white "
        break
      default:
        sizeStyle ="shadow h-12 w-64 bg-orange  text-whit"
    }
   }
    else if (buttonType == "iconButton"){
      switch(size){
        case "small":
            sizeStyle ="  "
            break;
        case "medium":
            sizeStyle =" "

        case "big":
            sizeStyle ="  "
      }


    }

    // setValue(value)

    return (
      
      <button className={sizeStyle}> {value}</button>
    );
  }


export default Button;
