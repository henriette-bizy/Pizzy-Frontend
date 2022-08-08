function MenuBar(){

return(
<aside className="w-5/6 float-right ">
<div className=" flex bg-white shadow-md h-16  ">
 
<div className="pt-6">
<a href="" className="flex pl-4 text-base font-normal text-dark-900 rounded-lg dark:text-dark hover:bg-gray-100 ">
<svg className=" my-1 text-gray-500 transition duration-75" width="20" height="16" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 18H18.5V15H0.5V18ZM0.5 0V3H27.5V0H0.5ZM0.5 10.5H27.5V7.5H0.5V10.5Z" fill="black"/>
</svg>
<span className="pl-5 text-norm ">Home </span>
<span className="text-sm ml-2 text-orange">  /</span>
</a>
</div>

</div>
</aside>
)


}

export default MenuBar;