import './App.css';
import React from 'react';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {foodName:'..........'}
  }
    EventChanger(foodName){
      this.setState({foodName:foodName});
    }
  


  render(){
  return (
    <div className="Home">
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
      <h1>Pizzy. </h1>
      </div>

      <div className='links'>
     <ul>
       <li><a href="#"> Home </a></li>
       <li><a href="#"> Menu </a></li>
       <li><a href="#"> About </a></li>
       <li><a href="#"> Contact</a></li>
     </ul>
      </div>

      <div className='nav-buttons'>
      <button> Sign in </button>
      </div>
    </div>


    <div className='Home-content'>
     <div className='left_content'>
    <p>Get the tasty Slice </p>
    <p> at Pizzy.com</p>
     </div>
    </div>
    </div>
    </div>
  );
}
}

export default Home;
