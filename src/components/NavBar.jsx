import react,{useState} from "react";
import "../assets/Styles/App.css";
import { Link } from "react-router-dom";
import  Button  from "./Button";


function NavBar() {

  const [navbar, setNavbar] = useState(false)

  
  const menuItems = [
    {
      value: "Home",
      link: "Home",
    },
    {
      value: "Menu",
      link: "Menu",
    },
    {
      value: "About",
      link: "About",
    },
    {
      value: "Contact",
      link: "Contact",
    },
  ];


const changeBackground = () =>{
if(window.scrollY >=95){
  console.log("we cam at yoouu mhn")
  setNavbar(true)
}
else{
  setNavbar(false)  
}
}

window.addEventListener('scroll', changeBackground);

  return (

    // <div className="navbar fixed w-[100%] h-20  bg-white shadow-md ">
     <div className={navbar ? " navbar fixed w-[100%] h-20  bg-white shadow-md z-10" : "navbar fixed w-[100%]"} >
      <div className="logo  float-left   mr-4"> 
        <h1 className="font-bold">Pizzy. </h1>
      </div>

      <div className=" w-[50%] h-12  mt-7 float-left pr-10">
        <ul className="flex">
            {menuItems.map((item) => (
              <li className=" w-[22%] mr-10 ">
              <a className=" text-xs text-orange font-bold   block ">
              <Link to={item.link} spy={true} smooth={true} duration={500} >{item.value} </Link> 
              </a>
            </li>
              ))}
          
        </ul>
      </div>

      <div className="float-right">
        

        {/* //buttonType, size ,value,...rest */}
       <Button buttontype="submitButton" value = "SignIn" size="small" className="mt-7"/> 
        
      </div>

    </div>
  );
}

export default NavBar;
