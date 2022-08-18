import React from "react";


class HomeContact extends  React.Component{

render(){
    return(
        <div className="Contact" id="Contact">
            <div className="Contact-left">
            {/* <img src={require('./images/contact1.jpg')}   alt="contact us picture"/> */}
            </div>


            <div className="Contact-right">
            <div className="Contact-right-intro">
              <h1>Get in touch </h1>
              <p>Have an inquiry or some feedback for us?</p>
              <p>Fill out the form  below to contact our team </p>
            </div>

            <div className="Contact-right-form ">
            <form action="">
             <div className="row">
             <label>Names</label>
             <input type="text" />
             </div>
             <div className="row">
             <label>Email</label>
             <input type="text" />
             </div>
             <div className="row">
             <label>Message</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
             </div>

             <div className="row">
            <input type="button" name="Send" id="" value="Send"/>
             </div>
            </form>
            </div>
            </div>
        </div>
    )
}


}
export default HomeContact;