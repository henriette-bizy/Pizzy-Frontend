import Form from "../../components/Form";
import {} from "../../assets/Styles/App.css"
import {useState} from 'react'
import {Link} from 'react-router-dom'
import Input from "../../components/Input"
import Button from "../../components/Button"


function SignUp(){ 


const [values,setValues] = useState({
    names:'',
    email:'',
    password:'',
    cpassword:''
})
const handleNamesChange = (event) =>{
    event.persist();
    setValues((value)=>({
     
    ...values,
    names:event.target.value,
    }))
}

const handleEmailChange = (event) =>{
    event.persist();
    setValues((value)=>({
        ...values,
        email:event.target.value,
    }))
}
const handlePasswordChange = (event) =>{
    event.persist();
    setValues((value)=>({
        ...values,
        password:event.target.value,
    }))
}

const handlecPasswordChange = (event) =>{
    event.persist();
    setValues((value)=>({
        ...values,
        cpassword:event.target.value,
    }))
}


const [valid,setValid] = useState(false)
const [submitted,setSubmitted] = useState(false);

const handleSubmit = (event) =>{
    event.preventDefault();

    if(values.names && values.email && values.password && values.cpassword){
        
    }
    setSubmitted(true);
}



    return(

<div className='signup'>
      
      <a className="m   t-12 pl-12 text-orange font-bold" href="/">
        Home
      </a>

    <div className="w-[60%] h-[650px] mt-32 shadow mx-auto">

    <div className="w-[30%] h-[650px] bg-orangeshadow float-left"></div>
    <div className="w-[70%] h-[650px] float-right">
    <h2 className="mt-12 mb-8 w-[30%] mx-auto font-bold">Sign Up on <span className="">Pizzy</span></h2>
    <form onSubmit={handleSubmit} className="w-[70%] mx-auto h-[500px]">
     

    {/* <div className="row">
        <label>Names</label>
        <input 
        name="Names"
        type="text"
        value={values.names}
        onChange={handleNamesChange}
        />  
        {submitted && !values.names && <span className="text-red-500 text-xs italic">Please enter names</span>}
    </div>   */}
        
        <Input label="Names" errorMsg="" className="shadow-[0_5px_6px_0_rgba(184,107,57,0.188)] h-12  w-[80%] mx-auto mb-3 border border-lightgray" />
        <Input label="Email" errorMsg="" className="shadow-[0_5px_6px_0_rgba(184,107,57,0.188)] h-12  w-[80%] mx-auto mb-3 border border-lightgray" />
        <Input label="Password" errorMsg="" className="shadow-[0_5px_6px_0_rgba(184,107,57,0.188)] h-12  w-[80%] mx-auto mb-3 border border-lightgray" />
        <Input label="Confirm Passwrod" errorMsg="" className="shadow-[0_5px_6px_0_rgba(184,107,57,0.188)] h-12  w-[80%] mx-auto mb-2 border border-lightgray" />
        <Button buttontype = "submitButton" value="send" link="/" size="big"  position=" mt-10"/>   
        <div>
        <span className="small-texts text-lightgray w-[40%] mx-auto"><a href="/signIn">Already have an account?</a></span>
        </div>
    </form>

</div>

{/*  */}
{/* {showSucess&&<div class='success-message text-blue-700 '>Success! Thank you for registering</div>} */}
</div>
    </div>


)


}
export default SignUp;

