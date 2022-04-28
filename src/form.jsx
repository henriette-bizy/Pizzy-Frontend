import React  from "react";


class PizzyForm extends React.Component{

constructor(props){
    super(props)
    this.state = {    
        isSignUp:true,
        isSignIn:false,
        isSubmitted:false,
        names:"",
        email:"",
        password:"",
        cpassword:"",
        hasNamesError:false,
        hasEmailError:false,
        hasPasswordError:false,
        hasCpassword:false
}
this.handleEmail = this.handleEmail.bind(this);
this.handleName = this.handleName.bind(this)
this.handlePassword = this.handlePassword.bind(this)
this.handleCpassword = this.handleCpassword.bind(this)
}


gotoSignIn(){
 this.setState({isSignIn:true , isSignUp:false})
}

gotoSignUp(){
    this.setState({isSignUp:true , isSignIn:false})
}
handleEmail(event){
const input = event.target.value
const isEmpty = input === ""
this.setState({email:input,
               hasEmailError: isEmpty
})
}

handleName(event){
    const input = event.target.value 
    const isEmpty = input === ""
    this.setState({names:input,
                   hasNamesError:isEmpty
    })
}

handlePassword(event){
    const input = event.target.value
    const isEmpty = input === ""
    this.setState({password:input,
         hasPasswordError:isEmpty
})
}

handleCpassword(event){
    const input = event.target.value 
    const isEmpty = input === ""
    this.setState({
        cpassword:input,
        hasCpassword:isEmpty
    })
}
handleSubmit(){
this.setState({isSubmitted:true})
}

render(){
let Form;
let hasEmailError;
let hasNamesError;
let hasPasswordError;
let hasCpasswordError;

if(this.state.hasEmailError){
hasEmailError = ( <>
<div className="Error">
<p>Email is required</p>
</div>
</>)
}

if(this.state.hasNamesError){
    hasNamesError = ( <>
        <div className="Error">
        <p>Names field  is required</p>
        </div>  
        </>)
}
if(this.state.hasPasswordError){
    hasPasswordError = ( <>
        <div className="Error">
        <p>Password field  is required</p>
        </div>  
        </>)
}
if(this.state.hasCpassword){
    hasCpasswordError = ( <>
        <div className="Error">
        <p>Confirm password field  is required</p>
        </div>  
        </>)
}



if(this.state.isSignUp){
    Form = (<><h2>Sign Up on <span className="">Pizzy</span></h2><form onSubmit={this.handleSubmit}>
         <div className="row">
        <label>Names
        <input 
        type="text"
        value={this.state.names} 
        onChange = {this.handleName}
        />
        </label>
        {hasNamesError}
        </div>
        
        
        <div className="row">
        <label>Email
        <input
        type="email"
         value={this.state.email} 
         onChange={this.handleEmail}/>
        </label>
        {hasEmailError}
        </div>
        
        <div className="row">
        <label>Password
        <input type="password" 
        value={this.state.password}
        onChange={this.handlePassword}/>
        </label>
        {hasPasswordError}
        </div>
        <div className="row">
        <label>Confirm Password
        <input type="password" 
        value={this.state.cpassword}
        onChange={this.handleCpassword}
        />
        </label>
        {hasCpasswordError}
        </div>
        
        <div className="row">
        <input type="submit" value={"sign In"}/>
        </div>        
        </form> </>
    )
}
else{

Form = (<> <h2>Sign In on <span className="">Pizzy</span></h2>
        <form className="signIn" onSubmit={this.handleSubmit}>
        <div className="row">
        <label>Email
        <input
        type="email"
         value={this.state.email} onChange={this.handleEmail}/>
        </label>
      {hasEmailError}
        </div>

        <div className="row">
        <label>Password
        <input type="password" 
        value={this.state.password}
        onChange={this.handlePassword} 
        />
        </label>
        {hasPasswordError}
        </div>
        <div className="row">
        <input type="submit" value="sign Up" />
        </div>        
        </form> 
    </>)


}
if(this.state.isSubmitted){
    Form = (
        <>
        <p>Response is recorded</p>
        </>
    )
}
return(
<div className="form">

    <div className="part1"></div>
    <div className="part2">
    {Form}
<div className="form-buttons ">
<button onClick={()=> {this.gotoSignUp()}}> Sign Up </button>
<button onClick={()=>{this.gotoSignIn()}}> Sign In </button>
</div>
</div>
</div>
)
}
}

export default PizzyForm;