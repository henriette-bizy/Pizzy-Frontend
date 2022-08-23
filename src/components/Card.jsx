import React from "react";
function Card({pizzaName,price,image}){
  console.log( typeof image);
  
return(
  
    <div className="card">
    <div className="bg-orange"></div>
      <img src={image}></img>
      <div className="price">{price}</div>
      <div className="pizzy-name">{pizzaName}</div>
    </div>    
)

}

export default Card;