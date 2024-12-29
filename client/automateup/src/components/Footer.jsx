import React from "react";
import svg1 from "../assets/svg1.svg";
import svg2 from "../assets/svg2.svg";
import svg4 from "../assets/svg4.svg";
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    
        <>
        <div className="p-6 w-full h-auto text-white bg-gray-900 md:h-96">
      
      {/* <div className="flex flex-col gap-8 justify-between md:mx-10">
        
        <div>
          <h4 className="mb-2 font-semibold md:text-xl underline-animation">Services</h4>
          <p className="text-gray-400 cursor-pointer md:text-lg hover:text-gray-100">
            Web Development
          </p>
          <p className="text-gray-400 cursor-pointer md:text-lg hover:text-gray-100">
            Task Automation
          </p>
          <p className="text-gray-400 cursor-pointer md:text-lg hover:text-gray-100">
            Social Media Automation
          </p>
          <p className="text-gray-400 cursor-pointer md:text-lg hover:text-gray-100">
            Custom Chatbot
          </p>
          <p className="text-gray-400 cursor-pointer md:text-lg hover:text-gray-100">
            UI/UX Design
          </p>
        </div>
        
        <div className="">
      <hr className="border-gray-500 border-t-1" />
    </div>

        <div className="justify-between text-center text-wrap">
          <div className="flex gap-2 justify-between font-semibold md:text-xl">
            <img src={Logo} alt="" className="w-24 md:w-28" />
          <p className="text-gray-400 md:text-lg">automateup.tech@gmail.com</p>
          </div>
          
          <div className="flex gap-3 mt-5 cursor-pointer">
            <img src={svg1} alt="" className="w-5 md:w-7 hover:scale-95" />
            <img src={svg2} alt="" className="w-5 md:w-7 hover:scale-95" />
              <img src={svg4} alt="" className="w-5 md:w-7 hover:scale-95" />
          </div>
        </div>
        


      </div> */}

        <div className="sm:justify-between sm:flex md:justify-center md:gap-28 md:mt-16 md:text-lg">
          <div>
            <img src={Logo} alt="" className="h-40 w-50"/>
          </div>
          <div className="mt-6">
            Who we are
            <ul>
              <li className="opacity-70 cursor-pointer hover:opacity-100">About us</li>
              {/* <li className="opacity-70 cursor-pointer hover:opacity-100">Blog</li> */}
            </ul>
          </div>
          <div className="mt-6">
            What we do
            <ul>
              <li className="opacity-70 cursor-pointer hover:opacity-100">Web Development</li>
              <li className="opacity-70 cursor-pointer hover:opacity-100">UI/UX Design</li>
              <li className="opacity-70 cursor-pointer hover:opacity-100">Social Media Automation</li>
              <li className="opacity-70 cursor-pointer hover:opacity-100">Task Automation</li>
              <li className="opacity-70 cursor-pointer hover:opacity-100">Custom Chatbot</li>
              <li className="opacity-70 cursor-pointer hover:opacity-100">Mail Automation</li>
            </ul>
          </div>
          <div className="mt-6">
            Let's Connect
            <ul>
              <li className="opacity-70 cursor-pointer hover:opacity-100">Email us</li>
              <li className="opacity-70 cursor-pointer hover:opacity-100">Contact</li>
              <div className="flex gap-3">
              <img src={svg2} alt="" className="mt-1 cursor-pointer"/>
              <img src={svg4} alt="" className="mt-1 cursor-pointer"/>
              <img src={svg1} alt="" className="mt-1 cursor-pointer"/>
              </div>
            </ul>
          </div>
        </div>
        



    </div>

        <div className="flex bottom-1 justify-center items-center w-full h-8 text-sm text-white bg-gray-800 md:justify-start md:text-left md:text-base">
          <h5 className="mx-5 text-gray-400">
          ©️ made with automateup - All Rights Reserved
          </h5>
        </div>
        </>
  );
};

export default Footer;
