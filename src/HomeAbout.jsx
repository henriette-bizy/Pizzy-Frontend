import React from "react";
import {FaQuestion,FaPlay} from "react-icons/fa"
import ReactPlayer from "react-player";
class HomeAbout extends React.Component{

render(){
    return(
        <div className="About">
        <div className="About-content">
        <div className="left-about">
        <div className="About-title">
                <div className="Question">
        <FaQuestion/>
        </div>
         <h2>About us </h2>
        </div>
{/*         
                    <p>
           We are Pizzy delivery shop, and as the name suggests it's all
             about Pizza. (because cheese was expensive, we was not rich you know),
              then baked in a pan, stove top style... (mama had no pizza oven).
            <br></br>
            <br></br>

    */}
    

    <p>
            Well, this tradition is still with our Little Italy Pizza Today!
             Only now we have lots and lots of cheese and a nice big oven. Mangia!
             Among the men who left Southern Italy to find their fortunes making pizza,
              my brother Salvatore has many cherished childhood memories of pizza, made at home
        </p> 
        

        <div className="about-button">
            <FaPlay className="about-icon"/>
         <button> Watch a video</button>
        </div>
        </div>


        <div className="right-about">
         <img src={require("./images/combined.png")} className="about-image" />
         <div className="right-card">
        
         </div>

         
        </div>
        </div>
         </div>
    )
}
}
export default HomeAbout;