function GetOrders(){
  
    return fetch("https://order-pizza-api.herokuapp.com/api/orders",    
    {
        method:"GET",
        headers:{
           'Content-Type':'application/json',
           'Access-Control-Allow-Origin': '*'
        }
    })
    .then(data=>data.json())

}
export default GetOrders