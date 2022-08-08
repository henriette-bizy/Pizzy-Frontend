import './assets/Styles/App.css';
import React from 'react';
import SignUp  from './pages/Registration/SignUp';
import Dashboard from './pages/Dashboard/admin/Dashboard'
import Home from './pages/Home'
import NotFound from './pages/NotFround/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App (){

  
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
   {/* <Home /> */}

<BrowserRouter >


  <Routes>
    {/* <Route path='/' element={<App />}></Route> */}
    <Route path='/' element={<Home />}></Route>
    <Route path='/signUp' element = {<SignUp />}></Route>
    <Route  path='/admin/dashboard' element = {<Dashboard />}></Route>
    <Route path = '*' element = {<NotFound />}></Route>
    
  </Routes>
  </BrowserRouter>



    </div>
  );
  }

export default App;
