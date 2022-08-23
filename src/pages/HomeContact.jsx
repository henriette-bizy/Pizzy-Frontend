import React from "react";
import Input from "../components/Input"
import Button from "../components/Button"

class HomeContact extends  React.Component{

render(){
    return(
        <div className="Contact" id="Contact">
            <div className="Contact-left">
            {/* <img src={require('./images/contact1.jpg')}   alt="contact us picture"/> */}
            </div>


            <div className="Contact-right">
            <div className="Contact-right-intro font-medium">
              <h1 className="font-bold">Get in touch </h1>
              <p>Have an inquiry or some feedback for us?</p>
              <p>Fill out the form  below to contact our team </p>
            </div>

            <div className="Contact-right-form ">
            <form action="">
             <Input label="Full names" errorMsg="" className="shadow-[0_5px_6px_0_rgba(184,107,57,0.188)] h-12  w-[60%] mx-auto mb-4 border border-lightgray"  /> 
             <Input label="Email" errorMsg="" className="shadow-[0_5px_6px_0_rgba(184,107,57,0.188)] h-12  w-[60%] mx-auto mb-4 border border-lightgray"  />
             <Input label="Email" errorMsg="" className="shadow-[0_5px_6px_0_rgba(184,107,57,0.188)] h-44  w-[60%] mx-auto mb-4 border border-lightgray"  />
             <Button buttontype = "submitButton" value="send" link="/" position="" size="medium"/>
            </form>
            </div>
            </div>
        </div>
    )
}


}
export default HomeContact;