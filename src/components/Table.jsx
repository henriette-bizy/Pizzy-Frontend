import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
function Table(){

  const  rows  = [

    {
         id:1 , col1:"Henriette Majura",col2:"Active", col3:"hopebiziyaremye@gmail.com", col4:"delete",col5:"update"
    },
    {
        id:2,col1:"Henriette Majura",col2:"Active", col3:"hopebiziyaremye@gmail.com", col4:"delete",col5:"update"
     },
     {
        id:3,col1:"Henriette Majura",col2:"Active", col3:"hopebiziyaremye@gmail.com", col4:"delete",col5:"update"
     },
    ]


   const columns =[


    { field: 'col1', headerName: 'Names', width: 250 , headerClassName:'bg-lightorange' },
    { field: 'col3', headerName: 'Email', width: 320, headerClassName:'bg-lightorange'},
    { field: 'col4', headerName: 'Update', width: 200,headerClassName:'bg-lightorange',cellClassName:'text-red'},
    { field: 'col5', headerName: 'Delete', width: 200,headerClassName:'bg-lightorange',cellClassName:'text-lightblue'},
   ]
    return(
        
        <div className=' mt-24 inline-block w-5/6 '>
                <div className=' w-64 h-12 float-right mr-20   ' >
                    
                    <span className='absolute  left-5/6 bottom-[592px] flex items-center pl-2'>
                    <button type='submit' className=''>
                        <svg fill="none" stroke="gray" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                        </span>
                <input  type="search"  className=" mt-1.5 h-12 rounded-md bg-white  pl-10 text-sm text-dark border-2 border-orange focus:outline-transparent"  placeholder="Search..." autocomplete="on"/>
                </div>
        <div className=' w-norm mt-20 ml-12 '>
        <div   style={{ height: 400, width: '100%'}} className='mt-2.5 mr-1.5'>
     <DataGrid rows={rows} columns={columns} pageSize={10}
     rowsPerPageOptions={[5]}
     checkboxSelection />
     </div>
     </div>
     </div>
    )
}
export default Table;