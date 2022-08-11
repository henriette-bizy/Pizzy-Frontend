import {useState,useEffect} from 'react';
import {GetOrders} from '../../../services/service'
function Orders(){

const [values, setValues] = useState([]);

//fetching
useEffect(()=>{
  let mounted = true;
  GetOrders()
  
  .then(items => {
    if(mounted) {
      setValues(items)
    }
  })
  return () =>mounted = false;
},[])
return (    
    <div>
   <h1>The orders</h1>
   <ul>
    {values.map((item=> <li>{item.item}</li>))}
    {console.log("down here we have no problem")};

   </ul>
  </div>

)



}
export default Orders;