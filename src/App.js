import './App.css';
import React from 'react';
import Home from './Home'
import Menu from './Menu'
import Form from './form'



class App extends React.Component{

  render(){
 const pizzaTypes = [
{
pizzyImage: './images/sausagePizza.jpg',
pizzyType:'Sausage Pizza',
pizzyPrice:'12 000 RWF'
},
{
  pizzyImage: './images/pepperoniPizza.jpg',
  pizzyType:'Pepperoni Pizza',
  pizzyPrice:'15 000 RWF'
}
,
{
  pizzyImage: './images/DetroitPizza.jpg',
  pizzyType:'Detroit Pizza',
  pizzyPrice:'13 000 RWF' 
},
{
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
  return (
    <div className="App">
      {/* <Form /> */}
  <Home />
  
   {pizzaTypes.map((pizzaItem)=>{
     return ( 
      <Menu pizzyImage= {pizzaItem.pizzyImage} pizzyType={pizzaItem.pizzyType}  pizzyPrice={pizzaItem.pizzyPrice}/>  
    )


   } 
  
   )} 
     
    </div>
  );
}
}

export default App;
