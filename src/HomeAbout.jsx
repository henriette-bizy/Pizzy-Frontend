import React from "react";
import {FaQuestion} from "react-icons/fa"
import ReactPlayer from "react-player";
class HomeAbout extends React.Component{

render(){
    return(
    
        <div className="About">
        <div className="About-content">
        <div className="About-title">
            <div className="Question">
        <FaQuestion/>
        </div>
         <h2>About us </h2>
        </div>

        <div className="left-content">
        <p>
           We are Pizzy delivery shop, and as the name suggests it's all
             about Pizza. assumenda officia nisi libero. Corrupti
              quo fugit, sapiente perspiciatis modi deserunt. Consequatur
               non cumque quam dolorem corrupti ipsa dolore debitis.
            <br></br>
            <br></br>
            


               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Fugiat recusandae, temporibus quibusdam quod debitis amet
               quisquam minus repudiandae veritatis reiciendis quam labore alias. 
               Officiis, itaque voluptatibus est voluptas sapiente ullam.
        </p>
        </div>
        <div className="right-content">
        {/* <img src={require("./images/chef.jpg")} alt="" /> */}
        <div className="right-content-image">
        </div>
        </div>
        </div>
        </div>


    )
}
}

export default HomeAbout;