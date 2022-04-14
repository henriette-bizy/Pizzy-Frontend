import React from "react";
class Menu extends React.Component{
render(){
    const image = this.props.pizzyImage
    console.log(image)
    return(
        <div className="menu-list">
    <div className="Pizzy-component-card">
     <div className="Pizzy-image">
     <img src = {require(`${image}`)} alt="the sausage pizza"/>
     </div>
     <div className="Pizzy-content">
      <p> {this.props.pizzyType}</p>
      <p> Cost  : {this.props.pizzyPrice}</p>
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