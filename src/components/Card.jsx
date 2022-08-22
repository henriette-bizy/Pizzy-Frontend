

function Card(pizzaName,price,image){

return(
    <div className="card">
    <div className="bg-orange"></div>
      <img src={require(image)}></img>
      <div className="price">{price}</div>
      <div className="pizzy-name">{pizzaName}</div>
    </div>    
)

}

export default Card;