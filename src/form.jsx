import React  from "react";

class PizzyForm extends React.Component{

render(){
return(
<div className="form">

    <div className="part1">


        
    </div>
    <div className="part2">
    <h2>Sign Up on <span className="">Pizzy</span></h2>
<form> 
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

</form>
<div className="form-buttons ">
<button> Sign up </button>
<button> Sign in </button>
</div>
</div>
</div>
)
}




}
export default PizzyForm;