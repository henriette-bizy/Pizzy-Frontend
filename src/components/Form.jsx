import {useState}  from "react";


function Form(){


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
        setValid(true);
    }
    setSubmitted(true);
}



return(
<div className="form">

    <div className="part1"></div>
    <div className="part2">
    <h2>Sign Up on <span className="">Pizzy</span></h2>
    <form onSubmit={handleSubmit} >
     

    <div className="row">
        <label>Names</label>
        <input 
        name="Names"
        type="text"
        value={values.names}
        onChange={handleNamesChange}
        />  
        {submitted && !values.names && <span className="text-red-500 text-xs italic">Please enter names</span>}
    </div>  
        
        <div className="row">
        <label>Email</label>
        <input
        name="Email"
        type="email"
        value={values.email} 
        onChange={handleEmailChange}
    />
       {submitted && !values.email && <span className="text-red-500 text-xs ">Please enter an email</span>}
        </div>
        
        <div className="row">
        <label>Password  </label>
        <input 
        name="password"
        type="password" 
        value={values.password}
        onChange={handlePasswordChange}
        />
        {submitted && !values.password && <span className="text-red-500 text-xs">Please enter a passwrod</span>}
        </div>

        <div className="row">
        <label>Confirm Password</label>
        <input 
        name="cpassword"
        type="password" 
        value={values.cpassword}
        onChange={handlecPasswordChange}
        />
        {submitted && !values.cpassword && <span className="text-red-500 text-xs ">Please Confirm your password</span>}
        </div>
        
        <div className="row">
        <input type="submit" value={"sign In"}/>
        </div>       
    </form>
<div className="form-buttons ">
<button onClick={()=> {this.gotoSignUp()}}> Sign Up </button>
<button onClick={()=>{this.gotoSignIn()}}> Sign In </button>
</div>
</div>

{/*  */}
{/* {showSucess&&<div class='success-message text-blue-700 '>Success! Thank you for registering</div>} */}
</div>
)
}


export default Form;