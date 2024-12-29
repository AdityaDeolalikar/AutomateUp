import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import menuIcon from "../assets/menu.png"; // Hamburger menu icon
import closeIcon from "../assets/close.png"; // Close icon
import { Link } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="flex z-50 flex-wrap justify-between items-center p-2 w-full">
        {/* Logo */}
        <div className="mx-8">
      <img
      src={Logo}
      alt="Logo"
      className="w-20 h-14 cursor-pointer md:w-72 md:h-20 lg:w-20 lg:h-14"
      />
      <h1 className="text-white"></h1>
      </div>

        {/* Desktop Menu */}
        <div className="hidden mx-8 space-x-8 text-lg font-medium list-none md:flex lg:space-x-16 md:text-base">
          <button className="m-2 text-white transition-transform duration-200 cursor-pointer hover:scale-110 underline-animation">
            <a href="#home">Home</a>
          </button>

          <button className="m-2 text-white transition-transform duration-200 cursor-pointer hover:scale-110">
            {/* <a href="#services">Services</a> */}
            <ScrollLink to="services" smooth={true} duration={500} spy={true}>
              Services
            </ScrollLink>
          </button>

          <button className="m-2 text-white transition-transform duration-200 cursor-pointer hover:scale-110">
            <Link to="/about">About Us</Link>
          </button>

          <button className="m-2 text-white transition-transform duration-200 cursor-pointer hover:scale-110">
            <ScrollLink to="contact" smooth={true} duration={900} spy={true}>Contact</ScrollLink>
          </button>


          <button className="m-2 text-white transition-transform duration-200 cursor-pointer hover:scale-110">
            <ScrollLink to="testimonials" smooth={true} duration={900} spy={true}>Our Work</ScrollLink>
          </button>

            <a href="https://cal.com/automateup.tech" target="_blank">
          <button className="px-4 py-1 m-2 text-white rounded-md border-2 border-white transition-transform duration-200 cursor-pointer hover:bg-white hover:text-black hover:border-slate-900">
              {" "}
              Book A Meet
          </button>
            </a>
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
          <button className="m-2 transition-transform duration-200 cursor-pointer hover:scale-110 underline-animation">
            <a href="#home">Home</a>
          </button>
          <button className="m-2 transition-transform duration-200 cursor-pointer hover:scale-110">
          <ScrollLink to="services" smooth={true} duration={500} spy={true}>
              Services
            </ScrollLink>
          </button>
          <button className="m-2 transition-transform duration-200 cursor-pointer hover:scale-110">
            <Link to="/about"> About Us</Link>
          </button>
          <button className="m-2 transition-transform duration-200 cursor-pointer hover:scale-110">
          <ScrollLink to="contact" smooth={true} duration={700} spy={true}>Contact</ScrollLink>
          </button>
        </div>
      )}
      <div className="mx-10 border-t border-white opacity-20"></div>
    </div>
  );
};

export default Navbar;
