import './assets/Styles/App.css';
import React, { useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import Routes from './routes'
import useToken from './useToken';
import { SignIn } from './services/service';
import {Redirect }from 'react-router'


function App (){

//  const [token,setToken] =  useToken();  
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
// if(!token){
//    <SignIn setToken={setToken} />
// }

  return (
    <div className="App">
   {/* <Home /> */}

<BrowserRouter >
<Routes />
   </BrowserRouter>
    </div>
  );
  }

export default App;
