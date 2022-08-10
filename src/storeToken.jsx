import { useEffect } from "react";

function StoreToken(){

  const statuse='';

    useEffect(()=>{
        fetch('https://order-pizza-api.herokuapp.com/api/auth'),
        {
         method:"POST",
         headers:{
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*'
         }
        }   
        ,
        {
            body:{
                username:"test",
                password:"test"
            }
        }
        .then((response)                                                         =>{
            const {token} = response.data;
            localStorage.setItem('token',token);
            localStorage.getItem('token')
            console.log(token);
            statuse ="true";
        })
        .catch(err=>{
                console.log(err)
                statuse = "false";
            })
        })
    
    
    return(
        <div>
     <p>{statuse}</p>
        </div>
    )
}


export default StoreToken;