import { stringify } from "postcss";

export function GetOrders()  {
    return fetch("https://order-pizza-api.herokuapp.com/api/orders",    {mode:'no-cors',method:"GET",headers:{'Content-Type':'application/json'}})    
        .then(data=>data.json())
        .catch(err=>console.log(err))
}


export async function _logIn(url='',data = {}){
    const response = await fetch(url,{

        method: 'POST',
        headers: {
            "Content-type": "application/json ; charset=UTF-8",
            "accept":"application/json; charset=UTF-8"
        },
        body:JSON.stringify(data)
    })

        return response.json();
}






export function SignIn(){

    return  fetch("https://order-pizza-api.herokuapp.com/api/auth",
    {
     mode:'no-cors',
     method:"POST",
     headers:{
        'Content-Type':'application/json'
     },
      body:{
            username:"test",
            password:"test"
        }
    }
    )
    .then((response) =>{
        // const {token} = response.data;
        console.log(response.data);
        // localStorage.setItem('token',token);
        // localStorage.getItem('token')
        // console.log(token);
    })
    .catch(err=>{
            console.log(err)
        })

}
