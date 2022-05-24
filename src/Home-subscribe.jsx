import React from "react"
import {FaArrowCircleRight} from "react-icons/fa"
class HomeSubscribe extends React.Component{

render(){


    return(

        <div className="subscribe">
            <div className="sub-left">
           <h2>Join our weekly news later</h2>
           <div className="sub-input">
           <input type="text"  placeholder="Your email" />
           <button>Send</button>
           </div>
            </div>

            <div className="sub-right">
            <div className="sub-right-profile">
                <img src={require('./images/Ellipse 3.png')}  />
            </div>
            <h2>Martinez Gonzella</h2>
            <p>" The head director of the coachella amazing pizza restaurant"</p>
        
        <FaArrowCircleRight size="32" color="orange" className="sub-right-icon"/>     
            </div>
        </div>
    )
}



}

export default HomeSubscribe;



