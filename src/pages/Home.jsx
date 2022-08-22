import "../assets/Styles/App.css";
import NavBar from "../components/NavBar"
import React from "react";
import HomeMenu from "./HomeMenu";
import HomeAbout from "./HomeAbout";
import  HomeSubscribe from './HomeSubscribe'
import HomeContact from "./HomeContact";
import wavy from '../assets/svg/wavy-home.svg'
import {ReactComponent as Wavy} from '../assets/svg/wavy-home.svg'
import {FaArrowRight} from "react-icons/fa"
import Button from "../components/Button"

function Home (){
    
    return (
      <div className="home" id="Home">
        <NavBar/>

       <div className="block  pt-[355px]"> 
       <Wavy />
       <img src={require("../assets/images/pizzaP.png")} className="relative left-[35%] bottom-[147px]"></img>
       </div>

        <div className="w-[100%] h-[90] text-5xl">
          {/* <div className=" bg-lightdark w-[30%] h-48 absolute left-[35%] top-[33%]  "> */}
          <div className="center_content">
            <p>Get the tasty Slice </p>
            <p> at Pizzy.com</p>
            <Button buttontype="iconButton" size="small" value={<FaArrowRight/>} position="ml-64 mt-3" link="/signUp"/>
          </div>
        </div>  
        <HomeMenu />
        <HomeAbout />
        <HomeSubscribe /> 
        <HomeContact />
      </div>
    );
  }


export default Home;
