import react from 'react';
import Button from './Button'
import {FontAwesome,FaAngleRight,FaArrowRight,FaAward,FaStar,FaAngleLeft,} from "react-icons/fa";

class NavBar extends react.Component{


    render(){



        return(
            <div className="navbar">
            <div className="logo">
              <h1>Pizzy. </h1>
            </div>

            <div className="links">
              <ul>
                <li>
                  <a href="#"> Home </a>
                </li>
                <li>
                  <a href="#"> Menu </a>
                </li>
                <li>
                  <a href="#"> About </a>
                </li>
                <li>
                  <a href="#"> Contact</a>
                </li>
              </ul>
            </div>

            <div className="btn ">
              <button className='bg-sky-600 hover:bg-sky-700 px-5 py-3 text-white rounded-lg'> Sign in </button>
            </div>
          </div>
        )
    }





}

export default NavBar;