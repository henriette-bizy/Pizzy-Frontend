import {getUsers } from '././../../../services/service'
import React,{ useEffect } from 'react';
import {Navigate, useNavigate} from 'react-router-dom'
import {getToken} from '../../../useToken';
import axios from "axios"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
function Users (){
const [users,setUsers] = React.useState(null)
// const navigate = useNavigate();


useEffect(()=>{
    const fetchData = async () => {
        const result = await axios(
          'http://localhost:4000/users',
        );
        let res = result.data.status.data.docs[0]
        setUsers(res);
        
      };
  
      fetchData();
    },[])
  }
  
    
    console.log(users)
    
    
    return(
      <div className='mt-24 inline-block w-5/6 '>
      <table>

      <tr>
        <th>id</th>
        <th>userName</th>
        <th>userEmail</th>
        <th>isAdmin</th>
        </tr>
      </table>

     <td>{users}</td>

    </div>
    )

export default Users