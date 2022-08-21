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

    event.preventDefault()
    console.log(values.userName,values.password);
     const  token = await  _logIn("https://order-pizza-api.herokuapp.com/api/auth", {username:values.userName,password:values.password});
    localStorage.setItem('token',JSON.stringify(token));
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
    <form className='w-[45%]  mx-auto my-24' onSubmit={handleSubmit}>
    {submitted && loggedIn && <Navigate to='/admin/dashboard/home'/>}
      
     <div className='mx-auto w-[90%]' >
     <Input  label="Email"  className="shadow h-12 w-[60%] mx-auto mb-2 " errorMsg="Please input your username "optional={false} value={values.userName}  type="text" onChange={handleUserName}/> 
     <Input  label="Password"  className="shadow h-12 w-[60%] mx-auto mb-2" errorMsg="Please input your  password "optional={false} value={values.password}  type="password" onChange={handlePassword}/> 
     <Button value="Send" buttontype="submitButton" size="medium" className="w-[60%]"/> 
      </div>
        </form>
   </div>
  )
 
}

export default SignIn;


// SignIn.propTypes = {
//   setToken:PropTypes.func.isRequired
// }

