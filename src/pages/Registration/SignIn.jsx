import {} from '../../assets/Styles/App.css'
import React ,{useState} from 'react'
import { _logIn } from '../../services/service'
import Input from '../../components/input';
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

  
  return(
   <div>
    <form className='w-96  flex flex-col  mx-auto my-24' onSubmit={handleSubmit}>
    {submitted && loggedIn && <Navigate to='/admin/dashboard/home'/>}
      
     

     <Input label="Names" className="bg-orange" optional="" errorMsg="Please enter your full names"  />

      <div className="w-full">
 <label className='w-full block'>Password</label>
 <input type="password" placeholder="Input ur password" className=" shadow h-12 w-64" value={values.password} onChange={handlePassword}/>
{submitted && !values.password && <span className="text-red-500 text-xs italic">Please enter your password</span>}
      </div>
      
      <div className='w-full'>
{/* <button type='submit' className='shadow h-12 w-64 bg-lightblue text-white'> submit</button> */}
<Button value="Send" buttonType="submitButton" size="medium"/>
      </div>
        </form>
   </div>
  )
 
}

export default SignIn;


// SignIn.propTypes = {
//   setToken:PropTypes.func.isRequired
// }

