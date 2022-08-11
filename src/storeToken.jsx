import { useEffect } from "react";
import { Button } from "react-scroll";
import {_logIn} from './services/service'

function StoreToken(){

  const data = {
    "username":"test",
	"password":"test"
  }
  let statuse='';

    // useEffect(()=>{
    //     const l =  _logIn("https://order-pizza-api.herokuapp.com/api/auth",data);
     
    // //    .then(
    // //     statuse = "true"
    // //    )
    // //    .catch(
    // //     statuse="byanze mhn"
    // //    )
    //    console.log(l);
    //     })
    
    
    return(
        <div>
<button type="button" onClick={()=>{_logIn("https://order-pizza-api.herokuapp.com/api/auth",data)}}> Sign in</button>
     <p>{statuse}</p>
        </div>
    )
}


export default StoreToken;