import React, { useEffect } from "react";
import videobg2 from "../assets/videobg2.mp4";
import Navbar from "./Navbar";
import Services from "./Services";
import Contact from "./Contact";
import { Link as ScrollLink } from "react-scroll";
import { FaChevronCircleUp } from "react-icons/fa";
import KeyFeatures from "./KeyFeatures";
import Footer from "../components/Footer";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import DoughnutChart from "../components/DoughnutChart";
import {ReactTyped} from 'react-typed'
import  Lottie from 'lottie-react';
import our1 from '../assets/Animations/our1.json'
import our2 from '../assets/Animations/our2.json'
import our3 from '../assets/Animations/our3.json'
import Testimonials from "./Testimonials";

const Hero = () => {
  useEffect(() => {
    console.log(window.location.hash)
    if (window.location.hash){
      document.getElementById(window.location.hash.replace('#','')).scrollIntoView({
        behavior: 'smooth'
      }) 
    }
  },[])
  return (
    <>
      <div className="overflow-hidden relative w-full h-screen" id="top">
        <video
          src={videobg2}
          autoPlay
          loop
          muted
          className="object-cover absolute top-0 left-0 w-full h-full"
        />

        <div className="absolute top-0 left-0 z-50 w-full">
          <Navbar />
        </div>

        <div className="flex absolute top-0 left-0 z-40 flex-col justify-center items-center mx-auto w-full h-full text-white bg-black bg-opacity-60">
          <div className="min-h-[90px] md:min-h-[100px] lg:min-h-[120px] flex items-center justify-center">
            <h1 className="text-4xl font-bold text-center 2xl:text-8xl md:items-center md:justify-center sm:text-5xl lg:text-7xl">
              <ReactTyped 
                strings={[
                  "Efficient AI Solutions ",
                  "Automate Business Processes ",
                  "Smart Workflow Automation ",
                  "Intelligent Task Automation ",
                  "Automated Success Strategies "
                ]} 
                loop={true} 
                showCursor={false}  
                typeSpeed={60} 
              />
            </h1>
          </div>
          
          <div className="text-center text-1xl sm:text-2xl lg:text-3xl">
            Accelerate growth through custom AI Automation <br /> 
            services tailored your business needs
          </div>
          
          <div>
            <a href="https://cal.com/automateup.tech" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-1 m-2 mt-5 w-full text-xl text-white rounded-md border-2 border-white transition-transform duration-200 cursor-pointer hover:bg-white hover:text-black hover:border-slate-900">
                Schedule A Meet
              </button>
            </a>
          </div>
        </div>
        <div></div>
      </div>{" "}
      <ScrollLink to="top" smooth={true} duration={600}>
        <button
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            fontSize: "35px",
            zIndex:"50"
          }}
        >
          <FaChevronCircleUp />
        </button>
      </ScrollLink>
      <Services />
      <div className="mt-10 md:mt-24">
        <h1 className="text-3xl font-semibold text-center md:text-5xl">
          Our Approach
        </h1>

        <div className="grid grid-cols-1 gap-10 mx-20 mt-8 md:grid-cols-3">
          <div className="flex flex-col gap-3 items-center">
            {/* <img src={icon1} alt="" className="w-32 h-auto md:w-40" /> */}
            <Lottie
        autoplay={true}
        loop={true}
        animationData={our1}
        className=" h-[250px] w-[250px] z-0"
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
        className=" h-[250px] w-[250px]  relative z-[-1]"
      />
            <h1 className="relative z-[-1] text-2xl font-semibold text-center md:text-3xl">
              Right Tech for the Right Problem
            </h1>
            <p className="relative z-[-1] font-medium text-center text-md md:text-left lg:text-center md:text-lg">
              We use a range of technologies, including low-code tools and AI,
              to meet your specific needs. By choosing the right tools, we
              deliver solutions that are both effective and adaptable to your
              business.``
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
      {/*  */}
        
        <Testimonials/>
      <KeyFeatures />
      <div id='contact'>
      <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Hero;
