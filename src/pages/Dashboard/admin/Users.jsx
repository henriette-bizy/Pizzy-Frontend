import { defaultListboxReducer } from '@mui/base'
import React,{ useEffect } from 'react';
import {Navigate, useNavigate} from 'react-router-dom'
import {getToken} from '../../../useToken';
import Table from '../../../components/Table'
function Users (){

const navigate = useNavigate();
useEffect(()=>{
    const token = getToken();
    if(getToken() === null){
        // return <Navigate to="/signIn" /> 
        navigate('/signIn');
        
       }
    console.log(token);
       
},[])
    return(
        <div>
        <button className='absolute  top-[166px] left-[1060px] h-12 w-48 bg-orange hover:bg-lightblue  py-2 px-4 rounded inline-flex items-center  border-non'>
            <svg class=" text-white  fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <p className='text-white'>Download CSV</p>
            </button>
        <Table />
        </div>
    )
}
export default Users;