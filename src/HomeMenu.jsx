import React from "react";
import {FaAngleRight,FaArrowRight,FaAward,FaStar,FaAngleLeft} from "react-icons/fa";
  
class HomeMenu extends React.Component{
render(){
    return(  <div className="Menu_content">
    <div className="Menu_title">
      <div className="award">
        <FaAward size="30px" />
      </div>
      <h2>What's on our Menu! </h2>
    </div>

    <div className="Menu_body">
      <div className="card">
      <div className="bg-orange"></div>
        <img src={require("./images/menu-1.png")}></img>
        <div className="price">$10</div>
        <div className="pizzy-name"> Pepperoni Pizza</div>
        
      </div>
      <div className="card">
        <img src={require("./images/menu-2.png")}></img>
        <div className="price">$30</div>
        <div className="pizzy-name"> Sausage Pizza</div>
      </div>
      <div className="card">
        <img src={require("./images/menu-3.png")}></img>
        <div className="price">$20</div>
        <div className="pizzy-name"> Italian Pizza</div>
        <div className="new-menu">
          <FaStar value="New " size="45" color="orange"/>
          <p>New</p>
        </div>
        
      </div>
      <div className="card">
        <img src={require("./images/menu-4.png")}></img>
        <div className="price">$15</div>
        <div className="pizzy-name"> British Pizza</div>
      </div>
      {/* <div className="card">
        <img src={require("./images/menu-5.png")}></img>
      </div>  
      <div className="card">
        <img src={require("./images/menu.png")}></img>
      </div> */}
    </div>

    <div className="Menu-footer">
    <FaAngleLeft className="left-angle"/>
    <FaAngleRight  size="40" className="right-angle"/>
    </div>
  </div>)
}

}

export default HomeMenu;