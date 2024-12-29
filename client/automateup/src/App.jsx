import React from "react";
import Hero from "./components/Hero";
// import servicesbg from "./assets/servicesbg.jpg";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation(); // Get the current route

  return (
    <>
      <div className="min-w-full min-h-screen ">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
