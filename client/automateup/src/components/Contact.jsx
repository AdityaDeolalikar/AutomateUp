import { useState } from "react";
import svg1 from "../assets/svg1.svg";
import svg2 from "../assets/svg2.svg";
import svg4 from "../assets/svg4.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false); // Popup state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Google Form action URL and input field entry IDs (replace with your values)
    const googleFormActionURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf3Lm2dcWHxuTw9hDQpX1NvGk7Isj8BtinpPn0i1e5eb79LRA/formResponse";
    
    // Replace these values with the actual entry IDs for your Google Form
    const formEntries = {
      fullName: "entry.394761048",  // Replace with your 'Full Name' entry ID
      email: "entry.767735353",     // Replace with your 'Email' entry ID
      message: "entry.1872242654",   // Replace with your 'Message' entry ID
    };

    // Build form data to send to Google Form
    const formBody = new URLSearchParams();
    formBody.append(formEntries.fullName, formData.fullName);
    formBody.append(formEntries.email, formData.email);
    formBody.append(formEntries.message, formData.message);

    try {
      await fetch(googleFormActionURL, {
        method: "POST",
        body: formBody,
        mode: "no-cors", // Allow CORS
      });

      // Reset the form and show popup
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });

      // Show popup for 2 seconds
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log(formData);
  };

  return (
    <div className="container px-4 py-16 mx-auto max-w-7xl" id="contact">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 md:text-5xl">
          Get In Touch
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          We help companies and individuals build out their brand guidelines.
        </p>
      </div>

      {/* Popup message */}
      {showPopup && (
        <div className="flex fixed top-5 right-5 z-50 items-center p-4 text-white bg-gradient-to-r from-green-500 to-green-600 rounded-lg shadow-lg transition-all duration-300 transform animate-fade-in">
          <span className="mr-2">✔</span> Message sent successfully!
        </div>
      )}

      <div className="flex flex-col gap-8 items-start lg:flex-row">
        <form
          onSubmit={handleSubmit}
          className="p-8 w-full bg-white rounded-2xl shadow-lg transition-shadow duration-300 lg:w-2/3 hover:shadow-xl"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="px-4 py-3 w-full rounded-lg border border-gray-200 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="px-4 py-3 w-full rounded-lg border border-gray-200 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="px-4 py-3 w-full rounded-lg border border-gray-200 transition-all duration-200 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Type your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 font-medium"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="p-8 w-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg lg:w-1/3">
          <h4 className="mb-6 text-xl font-bold text-gray-800">Contact Details</h4>
          <div className="space-y-6">
            <div>
              <p className="font-medium text-gray-600">Email</p>
              <a 
                href="mailto:automateup.tech@gmail.com" 
                className="text-blue-600 transition-colors duration-200 hover:text-blue-700"
              >
                automateup.tech@gmail.com
              </a>
            </div>
            
            <div>
              <p className="mb-3 font-medium text-gray-600">Follow us on:</p>
              <div className="flex gap-4">
                <a href="#" className="transition-transform duration-200 transform hover:scale-110">
                  <img src={svg1} alt="Social Icon" className="w-6 h-6" />
                </a>
                <a href="#" className="transition-transform duration-200 transform hover:scale-110">
                  <img src={svg2} alt="Social Icon" className="w-6 h-6" />
                </a>
                <a href="#" className="transition-transform duration-200 transform hover:scale-110">
                  <img src={svg4} alt="Social Icon" className="w-6 h-6" />
                </a>
              </div>
            </div>

            <a 
              href="https://cal.com/automateup.tech" 
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="px-6 py-3 w-full font-medium text-blue-600 rounded-lg border-2 border-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white">
                Schedule A Meet
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
