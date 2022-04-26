import React  from "react";

class PizzyForm extends React.Component{

constructor(props){
    super(props)
    this.state = {    
        isSignUp:false,
        isSignIn:false
}
}

gotoSignIn(){
 this.setState({isSignIn:true , isSignUp:false})
}

gotoSignUp(){
    this.setState({isSignUp:true , isSignIn:false})
}

    
render(){
let Form;
if(this.state.isSignUp){
    Form = (<><h2>Sign Up on <span className="">Pizzy</span></h2><form>
         <div className="row">
        <label>Names</label>
        <input type="text" />
        </div>
        
        <div className="row">
        <label>Email</label>
        <input type="text" />
        </div>
        
        <div className="row">
        <label>Password</label>
        <input type="text" />
        </div>
        <div className="row">
        <label>Confirm Password</label>
        <input type="text" />
        </div>
        
        <div className="row">
        <input type="submit" value={"sign In"}/>
        </div>        
        </form> </>
    )
}
else{

Form = (<> <h2>Sign In on <span className="">Pizzy</span></h2>
        <form className="signIn">
        <div className="row">
        <label>Email</label>
        <input type="text" />
        </div>
        
        <div className="row">
        <label>Password</label>
        <input type="text" />
        </div>
        
        <div className="row">
        <input type="submit" value={"sign Up"}/>
        </div>        
        </form> 
    </>)


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