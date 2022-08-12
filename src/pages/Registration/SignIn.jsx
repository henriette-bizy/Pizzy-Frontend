import {} from '../../assets/Styles/App.css'
import React ,{useState} from 'react'
import { _logIn } from '../../services/service'
import { PropTypes } from 'prop-types'
function SignIn(){
   
 const [values, setValues] = useState({
  userName:'',
  password:''
 })

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
    // setToken(token) 
  }
  return(
   <div>
    <form className='w-96  flex flex-col  mx-auto my-24' onSubmit={handleSubmit}>
      
      <div className=" w-full"> 
        <label className='w-full block'>UserName</label>
        <input type="text" placeholder="input ur username" className=" shadow h-12 w-64"  value={values.userName}   onChange={handleUserName}/>
        {submitted && !values.userName && <span className="text-red-500 text-xs italic">Please enter your username</span>}
      </div>
      <div className="w-full">
<label className='w-full block'>Password</label>
<input type="password" placeholder="Input ur password" className=" shadow h-12 w-64" value={values.password} onChange={handlePassword}/>
{submitted && !values.password && <span className="text-red-500 text-xs italic">Please enter your password</span>}
      </div>
      
      <div className='w-full'>
<button type='submit' className='shadow h-12 w-64 bg-lightblue text-white'> submit</button>
      </div>
        </form>
   </div>
  )
 
}

export default SignIn;


// SignIn.propTypes = {
//   setToken:PropTypes.func.isRequired
// }