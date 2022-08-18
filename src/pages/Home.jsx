import "../assets/Styles/App.css";
import NavBar from "../components/NavBar"
import React from "react";
import HomeMenu from "./HomeMenu";
import HomeAbout from "./HomeAbout";
import  HomeSubscribe from './HomeSubscribe'
import HomeContact from "./HomeContact";
import wavy from '../assets/svg/wavy-home.svg'
import {FaArrowRight} from "react-icons/fa"

function Home (){
    
    return (
      <div className="home" id="Home">
        
        <div className="container">
                    <NavBar/>
        </div>

        <div className="wavy">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
	<path fill="#FFFF" fill-opacity="1" d="M0,160L48,138.7C96,117,192,75,288,96C384,117,480,203,576,234.7C672,267,768,245,864,202.7C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
	</path>
</svg>

        </div>

        <div className="home_content">
          <div className="center_content">
            <p>Get the tasty Slice </p>
            <p> at Pizzy.com</p>
            <div className="arrow_right">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <img src={require("../assets/images/pizzaP.png")} className="pizzaHome"></img>
        <HomeMenu />
        <HomeAbout />
        <HomeSubscribe /> 
        <HomeContact />
      </div>
    );
  }


export default Home;
