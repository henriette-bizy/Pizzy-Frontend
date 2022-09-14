import {} from '../../assets/Styles/App.css'
import React ,{useState} from 'react'
import { _logIn } from '../../services/service'
import Input from '../../components/Input';
import {saveToken} from '../../useToken'
import { Navigate } from 'react-router-dom'
import Button from '../../components/Button'

function SignIn(){
   
 const [values, setValues] = useState({
  userName:'',
  password:''
 })
const [loggedIn, setLoggedIn] = useState(false);
const handleUserName = (event) =>{
  event.persist();
  setValues((value)=>({
    ...values,
    userName:event.target.value,
    
  }))

}
const handlePassword = (event) =>{
  event.persist();
  setValues((value)=>({
    ...values,
    password:event.target.value,
  }))
}
const [submitted, setSubmitted] = useState(false)
// const[valid, setValid] =  useState(false);



const handleSubmit = async(event) =>{
    const credentials ={
      userEmail:values.userName,
      userPassword:values.password
      }
    event.preventDefault()
     const  token = await _logIn("http://localhost:4000/login", credentials);
     console.log(token);
    localStorage.setItem('token',JSON.stringify(token.data));
  setSubmitted(true)
    saveToken(token);
    setLoggedIn(true); 
  }
;


 //function for handling out errors of the inputs
  // function outputError(labelInput,errorMsg,value){

  //    let result = '';
  //    console.log(labelInput);
  //   if(submitted && value)
  //          console.log(value);
  //    result = <p className="text-orange text-xs">{errorMsg}</p>


  //   return result;
  // }
  

  
  return(
      <div>

    <a className="mt-12 pl-12 text-lightorange font-bold" href="/">
    Home
  </a>

    <div className="w-[60%] h-[650px] mt-32 shadow mx-auto">
      <div className="w-[30%] h-[650px] bg-orangeshadow float-left"></div>

      <div className="w-[70%] h-[650px] float-right">
      <h2 className="mt-12 mb-8 w-[30%] mx-auto font-bold">Sign In with <span className="">Pizzy</span></h2>
    <form className='w-[80%]  mx-auto my-24' onSubmit={handleSubmit}>
    {submitted && loggedIn && <Navigate to='/admin/dashboard/home'/>}
      
     <div className='mx-auto w-[90%]' >
     <Input  label="Email"  className="shadow h-12 w-[80%] mx-auto mb-2 " errorMsg=" "optional={false} value={values.userName}  type="text" onChange={handleUserName}/> 
     <Input  label="Password"  className="shadow h-12 w-[80%] mx-auto mb-2" errorMsg=""optional={false} value={values.password}  type="password" onChange={handlePassword}/> 
     <Button value="Send" buttontype="submitButton" size="big" position=" mt-12" link=""/> 
     <div className='flex'>
     <span className="small-texts text-lightgray w-[40%] float-left underline"><a href="/signIn">Forgot Password?</a></span>
     <span className="small-texts text-lightgray w-[40%] underline"><a href="/signUp">Don't have an account?</a></span>
     </div>
      </div>
        </form>
   </div>
   </div>
   </div>
  )
 
}

export default SignIn;

