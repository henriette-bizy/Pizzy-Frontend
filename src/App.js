import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {foodName:'..........'}
  }
    EventChanger(foodName){
      this.setState({foodName:foodName});
    }
  


  render(){
  return (
    <div className="App">
    <h1>Pizzy. </h1>
     <div className='button_centered'>  

     <p>You have just orderd {this.state.foodName}</p>
    <button onClick={()=>{this.EventChanger("Peperoni Pizza")}}>Order Pepperoni</button>
    <button onClick={()=>{this.EventChanger("Sausage Pizza")}}>Order Sausage</button>
    </div>
    </div>
  );
}
}

export default App;
