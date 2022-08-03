import react from "react";
import "../assets/Styles/App.css";
import Button from "./Button";
import Home from "../pages/Home";
import Menu from "../pages/HomeMenu";
import About from "../pages/HomeAbout";
import Contact from "../pages/HomeContact";
import Form from "../components/Form";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function NavBar() {
  const menuItems = [
    {
      value: "Home",
      link: "/home",
    },
    {
      value: "Menu",
      link: "/menu",
    },
    {
      value: "About",
      link: "/about",
    },
    {
      value: "Contact",
      link: "/contact",
    },
  ];
  return (

    <div className="navbar">
      <div className="logo">
        <h1 className="font-bold">Pizzy. </h1>
      </div>

      <div className="flex items-center justify-between flex-wrap  p-7">
        <ul className="flex text-amber">
          <li className="mr-3">
            {menuItems.map((item) => (
              <Link to={item.link}>{item.value} </Link>
            ))}
          </li>
        </ul>
      </div>

      <div className="btn ">
        <Button className="bg-sky-600 hover:bg-sky-700 px-5 py-3 text-white rounded-lg">
          <Link to="/SignUp"> Sign in </Link>
        </Button>
      </div>
    </div>

    //corespoding links
  );
}

export default NavBar;
