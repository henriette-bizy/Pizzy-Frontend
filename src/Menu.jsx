import React from "react";
class Menu extends React.Component{

render(){
//      const pizzaTypes = [
// {
// pizzyImage: './images/sausagePizza.jpg',
// pizzyType:'Sausage Pizza',
// pizzyPrice:'12 000 RWF'
// },
// {
//   pizzyImage: './images/pepperoniPizza.jpg',
//   pizzyType:'Pepperoni Pizza',
//   pizzyPrice:'15 000 RWF'
// }
// ,
// {
//   pizzyImage: './images/DetroitPizza.jpg',
//   pizzyType:'Detroit Pizza',
//   pizzyPrice:'13 000 RWF' 
// },
// {
//   pizzyImage: './images/chicagoPizza.jpg',
//   pizzyType:'Chicago Pizza',
//   pizzyPrice:'15 000 RWF'  
// },
// {
//   pizzyImage:'./images/GreekPizza.png',
//   pizzyType:'Greek Pizza',
//   pizzyPrice:'10 000 RWF'   
// }
//  ]

//  {pizzaTypes.map((pizzaItem)=>{
  
    return(
        <div className="menu-list">
    <div className="Pizzy-component-card">
     <div className="Pizzy-image">
     {/* <img src = {require(`${pizzaItem.pizzyImage}`)} alt="the sausage pizza"/> */}
     </div>
     <div className="Pizzy-content">
      {/* <p> {pizzaItem.pizzyType}</p> */}
      {/* <p> Cost  : {pizzaItem.pizzyPrice}</p> */}
     </div>
     <div className="pizzy-button">
    <button> Order Now</button>
     </div>
    </div>
    </div>
    )
 }
}
export default Menu;
