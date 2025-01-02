import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCode, FaPaintBrush, FaRobot, FaTasks, FaComments, FaEnvelope } from "react-icons/fa";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Array of Data for the services
  const services = [
    {
      icon: <FaCode className="text-6xl text-primary group-hover:text-blue-600" />,
      title: "Web Development",
      description:
        "Custom web solutions tailored to your business needs with modern technologies.",
      content: "We create responsive, scalable, and performant web applications using the latest technologies and best practices. Our solutions are built to last and grow with your business.",
    },
    {
      icon: <FaPaintBrush className="text-6xl text-primary group-hover:text-blue-600" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that enhance user experience and engagement.",
      content: "Our design process focuses on creating intuitive, accessible, and visually appealing interfaces that delight users and achieve your business goals.",
    },
    {
      icon: <FaRobot className="text-6xl text-primary group-hover:text-blue-600" />,
      title: "Social Media Automation",
      description:
        "Streamline your social media presence with intelligent automation tools.",
      content: "Automate your social media management with our intelligent tools that help you maintain consistent engagement and grow your online presence.",
    },
    {
      icon: <FaTasks className="text-6xl text-primary group-hover:text-blue-600" />,
      title: "Task Automation",
      description:
        "Optimize workflows and boost productivity with custom automation solutions.",
      content: "We help businesses automate repetitive tasks and streamline workflows to increase efficiency and reduce operational costs.",
    },
    {
      icon: <FaComments className="text-6xl text-primary group-hover:text-blue-600" />,
      title: "Custom Chatbot",
      description:
        "Intelligent chatbots that enhance customer service and engagement.",
      content: "Deploy smart chatbots that handle customer inquiries 24/7, improve response times, and provide consistent service quality.",
    },
    {
      icon: <FaEnvelope className="text-6xl text-primary group-hover:text-blue-600" />,
      title: "Mail Automation",
      description:
        "Streamline communication with intelligent email automation systems.",
      content: "Automate your email communications with smart workflows that ensure timely, personalized, and effective email campaigns.",
    },
  ];

  const openPopup = (service) => {
    setSelectedService(service);
  };

  const closePopup = () => {
    setSelectedService(null);
  };

  return (
    <div id="services" className="py-20">
      <div className="relative z-0 h-auto bg-bgColor">
        <div className="container px-4 mx-auto">
          <h1 className="mb-16 text-4xl font-semibold text-center md:text-5xl">
            Our Services
          </h1>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg transition-all duration-300 transform cursor-pointer group hover:bg-gray-50 hover:-translate-y-2"
                onClick={() => openPopup(service)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedService && (
        <div className="flex fixed inset-0 z-50 justify-center items-center bg-black bg-opacity-50">
          <div className="relative p-8 w-11/12 max-w-2xl bg-white rounded-xl shadow-2xl">
            <button
              className="absolute top-4 right-4 text-2xl text-gray-500 transition-colors hover:text-gray-900"
              onClick={closePopup}
            >
              <RxCross2 />
            </button>
            <div className="flex items-center mb-6">
              <div className="mr-4 text-primary">
                {selectedService.icon}
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">
                {selectedService.title}
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-600">
              {selectedService.content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
