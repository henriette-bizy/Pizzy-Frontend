import React from 'react';



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
    

    const Button= ({styleclass,value}   )=> (
        <button className={` btn ${styleclass}`}>{value}</button>
    )
   
   
       
//    }
    
export default Button;