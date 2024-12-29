import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import automateupabout from "../assets/automateupabout.jpg";
import menuIcon from "../assets/menu.png"; // Hamburger menu icon
import about from "../assets/about.jpg";
import closeIcon from "../assets/close.png"; // Close icon
import teamWork from "../assets/teamWork.jpg";
import DoughnutChart from "../components/DoughnutChart";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import Footer from "../components/Footer";
import { VscArrowRight } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaChevronCircleUp } from "react-icons/fa";
import {Link as ScrollLink} from 'react-scroll'
import  Lottie from 'lottie-react';
import our1 from '../assets/Animations/our1.json'
import our2 from '../assets/Animations/our2.json'
import our3 from '../assets/Animations/our3.json'

const About = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (anchor) => {
    // If we are already on the HomePage (/), just scroll to the section
    if (location.pathname === "/") {
      window.location.hash = anchor; // Navigate to the anchor within the current page
    } else {
      // If we are on another page, navigate to the homepage and scroll
      navigate("/" + anchor);
    }
  };
  
 
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div id="about ">
      <div className="flex z-50 flex-wrap justify-between items-center p-2 w-full" id="top">
        {/* Logo */}
        <div className="mx-8">
          <img
            src={automateupabout}
            width={250}
            height={50}
            alt="Logo"
            className="w-20 h-14 cursor-pointer md:w-72 md:h-20 lg:w-20 lg:h-14"
          />
          <h1 className="text-white"></h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden mx-8 space-x-8 text-lg font-medium list-none md:flex lg:space-x-16 md:text-base">
          <button
            className="m-2 text-black transition-transform duration-200 cursor-pointer hover:scale-110"
            onClick={() => handleNavigation("#")}
          >
            Home
          </button>
          <button
            className="m-2 text-black transition-transform duration-200 cursor-pointer hover:scale-110"
            onClick={() => handleNavigation("#services")}
          >
            Services
          </button>
          <button className="m-2 text-black transition-transform duration-200 cursor-pointer hover:scale-110 underline-animation">
            About Us
          </button>
          <button
            className="m-2 text-black transition-transform duration-200 cursor-pointer hover:scale-110"
            onClick={() => handleNavigation("#contact")}
            // href="#contact"
          >
            Contact
          </button>
          <button className="m-2 text-black transition-transform duration-200 cursor-pointer hover:scale-110" 
          onClick={() => handleNavigation("#testimonials")}>
            Our Work
          </button>
          <button className="px-4 py-1 m-2 text-black rounded-md border-2 border-black transition-transform duration-200 cursor-pointer hover:bg-black hover:text-white hover:border-slate-900">
          <a href="https://cal.com/automateup.tech" target="_blank"> Book A Meet</a>
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mx-8 md:hidden">
          <img
            src={isMenuOpen ? closeIcon : menuIcon}
            alt="menu"
            className="w-5 h-5 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="flex absolute z-50 flex-col items-start p-4 w-full text-white bg-gray-900 shadow-md md:hidden">
          <button
            className="m-2 transition-transform duration-200 cursor-pointer hover:scale-110"
            onClick={() => handleNavigation("#")}
          >
            Home
          </button>
          <button
            className="m-2 transition-transform duration-200 cursor-pointer hover:scale-110"
            onClick={() => handleNavigation("#services")}
          >
            Services
          </button>
          <button className="m-2 transition-transform duration-200 cursor-pointer hover:scale-110 underline-animation">
            About Us
          </button>
          <button
            className="m-2 transition-transform duration-200 cursor-pointer hover:scale-110"
            onClick={() => handleNavigation("#contact")}
          >
            Contact
          </button>
          <button className="m-2 text-black transition-transform duration-200 cursor-pointer hover:scale-110" 
          onClick={() => handleNavigation("#home")}>
            Our Work
          </button>
        </div>
      )}
      <div class="mx-10 border-t border-black opacity-20"></div>

      <div className="relative">
        <img src={about} alt="" className="object-cover w-full h-[100vh]" />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50"></div>
        <div className="flex absolute top-0 left-0 z-10 flex-col gap-10 justify-center items-center w-full h-full">
          <p className="text-5xl font-semibold text-center text-white md:text-7xl">
            Your Trusted Partner In AI-Driven Automation Solutions
          </p>
          <p className="mx-auto font-semibold text-center text-white md:text-2xl text-md">
            Our team, with extensive experience, transforms your concepts into
            powerful <br /> software solutions, ensuring swift execution and
            superior results.
          </p>
        </div>
      </div>

      {/* Next section */}

      <div className="flex flex-col mt-10 w-full md:mt-5 md:flex-row md:items-center md:gap-10">
        <div className="md:w-1/2">
          <img
            src={teamWork}
            alt="Teamwork"
            className="mx-auto w-3/4 rounded-lg shadow-md opacity-100 md:mt-10 md:w-full md:mx-10"
          />
        </div>
        <div className="w-full md:mx-10 md:w-1/2">
          <h1 className="mx-auto mt-4 w-3/4 text-3xl font-semibold text-center md:text-4xl md:text-left md:w-full">
            We are a closely-knit team of creators and problem solvers
          </h1>
          <p className="mx-auto mt-4 w-3/4 font-medium text-center text-md md:text-left md:w-full md:text-lg">
            Our strength lies in our people. Our team of dedicated professionals
            combines their diverse skills and experiences to create software
            that not only meets but exceeds your business goals. <br /> We take
            pride in our collaborative approach, ensuring seamless communication
            and exceptional outcomes from start to finish. We never ship
            anything less than production-grade software that’s loved by its
            users.
          </p>
        </div>
      </div>

      {/* Next section */}
      <div className="mt-10 md:mt-24">
        <h1 className="text-3xl font-semibold text-center md:text-4xl">
          Our Approach
        </h1>

        <div className="grid grid-cols-1 gap-10 mx-20 mt-8 md:grid-cols-3">
          <div className="flex flex-col gap-3 items-center">
            {/* <img src={icon1} alt="" className="w-32 h-auto md:w-40" /> */}
            <Lottie
        autoplay={true}
        loop={true}
        animationData={our1}
        className=" h-[250px] w-[250px]"
      />
            <h1 className="text-2xl font-semibold text-center md:text-3xl">
              Clear Communication
            </h1>
            <p className="font-medium text-center text-md md:text-left lg:text-center md:text-lg">
              Great communication is key to project success. Through
              transparency and regular check-ins, we ensure your vision is
              accurately translated into a high-quality, functional product.
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center">
            {/* <img src={icon2} alt="" className="w-32 h-auto md:w-40" /> */}
            <Lottie
        autoplay={true}
        loop={true}
        animationData={our2}
        className=" h-[250px] w-[250px]"
      />
            <h1 className="text-2xl font-semibold text-center md:text-3xl">
              Right Tech for the Right Problem
            </h1>
            <p className="font-medium text-center text-md md:text-left lg:text-center md:text-lg">
              We use a range of technologies, including low-code tools and AI,
              to meet your specific needs. By choosing the right tools, we
              deliver solutions that are both effective and adaptable to your
              business.
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center">
            {/* <img src={icon3} alt="" className="w-32 h-auto md:w-40" /> */}
            <Lottie
        autoplay={true}
        loop={true}
        animationData={our3}
        className=" h-[250px] w-[250px]"
      />
            <h1 className="text-2xl font-semibold text-center md:text-3xl">
              All Encompassing Team
            </h1>
            <p className="font-medium text-center text-md md:text-left lg:text-center md:text-lg">
              Our in-house team provides all the expertise you need—designers,
              developers, project managers, and QA specialists—ensuring unified
              vision and execution for a product that meets your standards of
              excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Next section */}
      

      <div className="flex flex-col gap-3 justify-center mt-20 h-96 text-center bg-customColor md:mt-20">
        <h1 className="text-3xl font-semibold text-white md:text-4xl">
          Ready to start your own project?
        </h1>
        <p className="text-2xl font-semibold text-white md:text-3xl">Let's get started!</p>
        <div className="flex justify-center items-center">
          <button className="flex items-center px-4 py-1 m-2 font-medium text-white rounded-md border-2 border-white transition-transform duration-200 cursor-pointer hover:scale-105 md:w-1/7 hover:bg-black hover:text-white hover:border-slate-900" onClick={() => handleNavigation("#contact")}> 
            Get in touch
            <VscArrowRight className="ml-2" />
          </button> 
        </div>
      </div>
      <ScrollLink to="top" smooth={true} duration={600}>
        <button
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            fontSize: "35px",
          }}
        >
          <FaChevronCircleUp />
        </button>
      </ScrollLink>
      <div className="mt-10 md:mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
