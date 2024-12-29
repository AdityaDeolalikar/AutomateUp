// import React from "react";
// import webdev from "../assets/webdev.jpg";
// import appdev from "../assets/appdev.jpg";
// import chatbot from "../assets/chatbot.jpg";

// const Services = () => {
//   return (
//     <div id="services">
//       <div className="mt-8 h-auto md:mt-8">
//         <div>
//           <h1 className="relative top-5 z-10 text-4xl font-semibold text-center md:text-5xl">
//             Services
//           </h1>
//         </div>

//         {/* Card */}

//         <div className="grid grid-cols-1 gap-12 p-2 mx-14 mt-10 h-auto sm:grid-cols-2 md:grid-cols-3">
          
//           <div className="flex flex-col justify-center items-center p-4 rounded-md shadow-xl transition-transform duration-200 cursor-pointer hover:scale-105">
//             <img src={webdev} alt="logo1" className="w-40" />
//             <h1 className="mt-5 text-3xl font-semibold md:text-4xl">Web Development</h1>
//             <p className="mt-2 text-lg font-medium text-center md:text-xl">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Aspernatur, obcaecati!
//             </p>
//           </div>
          
//           <div className="flex flex-col justify-center items-center p-4 rounded-md shadow-xl transition-transform duration-200 cursor-pointer hover:scale-105">
//             <img src={appdev} alt="logo1" className="w-40" />
//             <h1 className="mt-5 text-3xl font-semibold md:text-4xl">UI/UX Design</h1>
//             <p className="mt-2 text-lg font-medium text-center md:text-xl">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Aspernatur, obcaecati!
//             </p>
//           </div>
//           <div className="flex flex-col justify-center items-center p-4 rounded-md shadow-xl transition-transform duration-200 cursor-pointer hover:scale-105">
//             <img src={chatbot} alt="logo1" className="w-40" />
//             <h1 className="mt-5 text-3xl font-semibold text-center md:text-4xl">Social Media Automation</h1>
//             <p className="mt-2 text-lg font-medium text-center md:text-xl">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Aspernatur, obcaecati!
//             </p>
//           </div>
//           <div className="flex flex-col justify-center items-center p-4 rounded-md shadow-xl transition-transform duration-200 cursor-pointer hover:scale-105">
//             <img src={appdev} alt="logo1" className="w-40" />
//             <h1 className="mt-5 text-3xl font-semibold md:text-4xl">Task Automation</h1>
//             <p className="mt-2 text-lg font-medium text-center md:text-xl">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Aspernatur, obcaecati!
//             </p>
//           </div>
//           <div className="flex flex-col justify-center items-center p-4 rounded-md shadow-xl transition-transform duration-200 cursor-pointer hover:scale-105">
//             <img src={webdev} alt="logo1" className="w-40" />
//             <h1 className="mt-5 text-3xl font-semibold md:text-4xl">Custom Chatbot</h1>
//             <p className="mt-2 text-lg font-medium text-center md:text-xl">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Aspernatur, obcaecati!
//             </p>
//           </div>
//           <div className="flex flex-col justify-center items-center p-4 rounded-md shadow-xl transition-transform duration-200 cursor-pointer hover:scale-105">
//             <img src={chatbot} alt="logo1" className="w-40" />
//             <h1 className="mt-5 text-3xl font-semibold md:text-4xl">Mail Automation</h1>
//             <p className="mt-2 text-lg font-medium text-center md:text-xl">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Aspernatur, obcaecati!
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React, { useState } from "react";
import webdev from "../assets/webdev.jpg";
import appdev from "../assets/appdev.jpg";
import chatbot from "../assets/chatbot.jpg";
import { RxCross2 } from "react-icons/rx";
const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Array of Data for the services
  const services = [
    {
      img: webdev,
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, obcaecati!",
      content: "Detailed content for Web Development.",
    },
    {
      img: appdev,
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, obcaecati!",
      content: "Detailed content for UI/UX Design.",
    },
    {
      img: chatbot,
      title: "Social Media Automation",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, obcaecati!",
      content: "Detailed content for Social Media Automation.",
    },
    {
      img: appdev,
      title: "Task Automation",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, obcaecati!",
      content: "Detailed content for Task Automation.",
    },
    {
      img: webdev,
      title: "Custom Chatbot",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, obcaecati!",
      content: "Detailed content for Custom Chatbot.",
    },
    {
      img: chatbot,
      title: "Mail Automation",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, obcaecati!",
      content: "Detailed content for Mail Automation.",
    },
  ];

  // Function to open the popup
  const openPopup = (service) => {
    setSelectedService(service);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedService(null);
  };

  return (
    // <div id="services  ">
    //   <div className="relative z-0 mt-8 h-auto md:mt-8 bg-bgColor">
    //     <div>
    //       <h1 className="relative top-5 z-10 text-4xl font-semibold text-center md:text-5xl">
    //         Services
    //       </h1>
    //     </div>

    //     {/* Card */}
    //     <div className="grid grid-cols-1 gap-12 p-2 mx-14 mt-10 h-auto sm:grid-cols-2 md:grid-cols-3">
    //       {services.map((service, index) => (
    //         <div
    //           key={index}
    //           className="flex flex-col justify-center items-center p-4 rounded-md shadow-xl transition-transform cursor-pointer duration-600 hover:scale-105"
    //           onClick={() => openPopup(service)}
    //         >
    //           <img src={service.img} alt={service.title} className="w-40" />
    //           <h1 className="mt-5 text-2xl font-semibold text-center md:text-3xl">
    //             {service.title}
    //           </h1>
    //           <p className="mt-2 text-lg font-medium text-center md:text-lg">
    //             {service.description}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Popup Modal */}
    //   {selectedService && (
    //     <div className="flex fixed inset-0 justify-center items-center bg-black bg-opacity-50">
    //       <div className="relative p-8 w-11/12 max-w-lg bg-white rounded-lg shadow-lg">
    //         <button
    //           className="absolute top-2 right-2 text-black-500 hover:text-black-900"
    //           onClick={closePopup}
    //         >
    //           <RxCross2 />
    //         </button>
    //         <h2 className="mb-4 text-3xl font-semibold">
    //           {selectedService.title}
    //         </h2>
    //         <p className="text-lg">{selectedService.content}</p>
    //       </div>
    //     </div>
    //   )}
    // </div>
    
   
      <div id="services">
        <div className="relative z-0 mt-8 h-auto bg-bgColor md:mt-8"> {/* Red background */}
          <div>
            <h1 className="relative top-5 z-10 text-4xl font-semibold text-center md:text-5xl">
              Services
            </h1>
          </div>
    
          {/* Card Section */}
          <div className="grid relative z-50 grid-cols-1 gap-12 p-2 mx-14 mt-10 h-auto sm:grid-cols-2 md:grid-cols-3" >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center p-4 bg-white rounded-md shadow-md transition-transform cursor-pointer duration-600 hover:scale-105"
                onClick={() => openPopup(service)}
              >
                <img src={service.img} alt={service.title} className="w-40" />
                <h1 className="mt-5 text-2xl font-semibold text-center md:text-3xl">
                  {service.title}
                </h1>
                <p className="mt-2 text-lg font-medium text-center md:text-lg">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
    
        {/* Popup Modal */}
        {selectedService && (
          <div className="flex fixed inset-0 justify-center items-center bg-black bg-opacity-50">
            <div className="relative p-8 w-11/12 max-w-lg bg-white rounded-lg shadow-lg">
              <button
                className="absolute top-2 right-2 text-black-500 hover:text-black-900"
                onClick={closePopup}
              >
                <RxCross2 />
              </button>
              <h2 className="mb-4 text-3xl font-semibold">
                {selectedService.title}
              </h2>
              <p className="text-lg">{selectedService.content}</p>
            </div>
          </div>
        )}
      </div>
    );
    
  
};

export default Services;
