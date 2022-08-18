import react from "react";
import "../assets/Styles/App.css";
import { Link } from "react-router-dom";
import { Button } from "react-scroll";


function NavBar() {



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




  return (

    <div className="navbar flex">
      <div className="logo  float-left clear-left  mr-4"> 
        <h1 className="font-bold">Pizzy. </h1>
      </div>

      <div className=" w-[50%] h-12  mt-7 float-left mr-10">
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

      <div className="ml-52 float-right">
        {/* <button className="bg-orange  px-5 py-3  rounded-lg  mt-3">
          <a href="/signUp"> Sign in </a>
        </button> */}
        <button className="bg-orange  px-5 py-3  rounded-lg  mt-7">
          <a href="/signUp"> Sign in </a>
        </button>
        
      </div>

      <div>
        
      </div>

    </div>

    //corespoding links
  );
}

export default NavBar;
