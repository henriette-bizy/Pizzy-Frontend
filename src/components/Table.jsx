import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

function Table(){

  const  rows  = [
    {
         id:1 ,  col1:"Henriette Majura",col2:"Active", col3:"hopebiziyaremye@gmail.com", col4:"delete",col5:"update"
    },
    {
        id:2,col1:"Henriette Majura",col2:"Active", col3:"hopebiziyaremye@gmail.com", col4:"delete",col5:"update"
     },
     {
        id:3,col1:"Henriette Majura",col2:"Active", col3:"hopebiziyaremye@gmail.com", col4:"delete",col5:"update"
     },
    ]


   const columns =[


    { field: 'col1', headerName: 'Names', width: 250},
    { field: 'col2', headerName: 'Status', width: 150},
    { field: 'col3', headerName: 'Email', width: 300},
    { field: 'col4', headerName: 'Update', width: 170},
    { field: 'col5', headerName: 'Delete', width: 170},
   ]
    return(
        
        <div>
            
            <button className='ml-3 mt-12 h-12 w-48 bg-lightblue hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
            <svg class=" text-white fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span className='text-white'>Download CSV</span>
            </button>
            
        <div className=' w-norm pt-12 '>
        <div   style={{ height: 400, width: '100%'}} >
     <DataGrid rows={rows} columns={columns} pageSize={10}
     rowsPerPageOptions={[5]}
     checkboxSelection />
     </div>
     </div>
     </div>
     
    )
}
export default Table;