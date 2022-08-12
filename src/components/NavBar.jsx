import react from "react";
import "../assets/Styles/App.css";
import { Link } from "react-router-dom";


function NavBar() {






  const menuItems = [
    {
      value: "Home",
      link: "home",
    },
    {
      value: "Menu",
      link: "Menu_content",
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
    //random shit
  return (

    <div className="navbar">
      <div className="logo">
        <h1 className="font-bold">Pizzy. </h1>
      </div>

      <div className="flex items-center justify-between flex-wrap  p-7 float-left">
        <ul className="flex text-amber">
          <li className="mr-3">
            <a>
            {menuItems.map((item) => (
              <Link to={item.link} spy={true} smooth={true} duration={500} >{item.value} </Link> ))}
              </a>
          </li>
        </ul>
      </div>

      <div className="btn  float-right">
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
