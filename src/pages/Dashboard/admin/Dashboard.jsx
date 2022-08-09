import SideBar from "../../../components/SideBar";
import MenuBar from "../../../components/MenuBar"
import Navigation from "../../../routes"
function AdminDashboard (){

return(
    <div>
    <div >
    <SideBar />
    <MenuBar />
    </div>  

     <div>
        <Navigation />
     </div>

{/* the users  table */}
{/*     
    <button className='absolute  top-[166px] left-[1060px] h-12 w-48 bg-orange hover:bg-lightblue  py-2 px-4 rounded inline-flex items-center  border-non'>
            <svg class=" text-white  fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <p className='text-white'>Download CSV</p>
            </button>
    <Table/> */}
    
    </div>

)




}

export default AdminDashboard;