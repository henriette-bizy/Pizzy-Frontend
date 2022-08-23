 import React from "react";
import {FaAngleRight,FaArrowRight,FaAward,FaStar,FaAngleLeft} from "react-icons/fa";
import Button from '../components/Button'
import Card from '../components/Card'
  
const pizzaTypes = [
  { pizzyImage: './images/sausagePizza.jpg',
   pizzyType:'Sausage Pizza', pizzyPrice:'12 000 RWF' },

    {   pizzyImage: './images/pepperoniPizza.jpg',
       pizzyType:'Pepperoni Pizza',
          pizzyPrice:'15 000 RWF' }
           , {   pizzyImage: './images/DetroitPizza.jpg',
              pizzyType:'Detroit Pizza', 
                pizzyPrice:'13 000 RWF'  }, {
 pizzyImage: './images/chicagoPizza.jpg',
 pizzyType:'Chicago Pizza',
 pizzyPrice:'15 000 RWF'  
},
{
 pizzyImage:'./images/GreekPizza.png',
 pizzyType:'Greek Pizza',
 pizzyPrice:'10 000 RWF'   
}
]


function HomeMenu(){



    return(  <div className="Menu_content" id="Menu">
    <div className="w-[60%] flex mx-auto">
      <Button buttontype="iconButton" size="medium" value={<FaAward size={28}/>} position="ml-80" link="/singIn"/>  
      <h2 className="mt-3 ml-3 text-[22px] font-bold">What's on our Menu! </h2>
      
    </div>

    <div className="w-[96%] flex p-[30px] mx-auto items-center">




{/* 
      using the mapping with the single components
      
      {pizzaTypes.map((pizzaItem)=>{ 
        <Card pizzaName={pizzaItem.pizzyType} price={pizzaItem.pizzyPrice} image={pizzaItem.pizzyImage} />
        })}
      */}
      <div className="card">
      <div className="bg-orange"></div>
        <img src={require("../assets/images/menu-1.png")}></img>
        <div className="price">$10</div>
        <div className="pizzy-name"> Pepperoni Pizza</div>
      </div>
       
      <div className="card">
        <img src={require("../assets/images/menu-2.png")}></img>
        <div className="price">$30</div>
        <div className="pizzy-name"> Sausage Pizza</div>
      </div>
      <div className="card">
        <img src={require("../assets/images/menu-3.png")}></img>
        <div className="price">$20</div>
        <div className="pizzy-name"> Italian Pizza</div>
        <div className="new-menu">
          <FaStar value="New " size="45" color="orange"/>
          <p>New</p>
        </div>
        
      </div>
      <div className="card">
        <img src={require("../assets/images/menu-4.png")}></img>
        <div className="price">$15</div>
        <div className="pizzy-name"> British Pizza</div>
      </div>
    </div>


  {/* what needs to be studied and decided on */}
    {/* <div className="Menu-footer">
    <FaAngleLeft className="left-angle"/>
    <FaAngleRight  size="40" className="right-angle"/>
    </div> */}
  </div>)
}



export default HomeMenu;