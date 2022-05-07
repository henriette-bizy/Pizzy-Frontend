import React from "react";
import {FaQuestion} from "react-icons/fa"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Magnam consequuntur assumenda officia nisi libero. Corrupti
              quo fugit, sapiente perspiciatis modi deserunt. Consequatur
               non cumque quam dolorem corrupti ipsa dolore debitis.



               Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Fugiat recusandae, temporibus quibusdam quod debitis amet
               quisquam minus repudiandae veritatis reiciendis quam labore alias. 
               Officiis, itaque voluptatibus est voluptas sapiente ullam.
        </p>
        </div>
        <div className="right-content">
        {/* <img src={require("./images/chef.jpg")} alt="" /> */}
        <div className="right-content-image">
        <div className="first-role">
            <div className="role-tag">
        <div className="number">
         1.
        </div>
        Tasty slices made by experts
        
        </div>
        </div>
              
      <div className="second-role">
            <div className="role-tag">
        <div className="number">
         2.
        </div>
        Good price and affordable
        
        </div>
        </div>
        <div className="third-role">
         <div className="role-tag">
        <div className="number">
         3.
        </div>
        Fast and lovely delivery
        
        </div>
        </div>

        
        <img src={require("./images/chef1.png")} alt="the chef" />
    <img src={require("./images/delivery2.png")}></img>
        </div>
        </div>
        </div>
        </div>


    )
}
}

export default HomeAbout;