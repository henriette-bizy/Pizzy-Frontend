import { stringify } from "postcss";
import axios from "axios"

export function GetOrders()  {
    return fetch("https://order-pizza-api.herokuapp.com/api/orders",  
      {mode:'no-cors',method:"GET",headers:{'Content-Type':'application/json'}})    
        .then(data=>data.json())
        .catch(err=>console.log(err))
}


export async function _logIn(url='',data = {}){
    const response = await axios
    .post(url,JSON.stringify(data),{
        headers: {
        'Content-type': 'application/json',
        }
    }) 
    return response;
}




export async function getUsers(url){

   const response = await axios 
   
   .then(res=>{
    console.log(res)
   })
}


export async function getUser(url, id){
    const response = await getaxios(url,id)

}