// Import all components from the components folder
import About from "./components/About";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
// import profileImg from "./assets/profile.jpg";
import React, { useState, useEffect } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-5 h-5 bg-[#EAFF74] rounded-full pointer-events-none transition-transform duration-75"
      style={{
        top: position.y - 10, // Adjust for center alignment
        left: position.x - 10,
      }}
    />
  );
};

export default function App() {
  return (
    <div className="grid bg-[#242B33] grid-cols-12 grid-rows-[0.75fr_repeat(7,1fr)] gap-5 p-6 h-screen relative">
      <MouseFollower />
      <div className="col-span-12 row-span-1 bg-white rounded-[18px]"><Navbar /></div>
      <div className="col-span-5 row-span-4 col-start-1 row-start-2 bg-white rounded-[18px]"><Intro /></div>
      <div className="col-span-3 row-span-4 col-start-6 row-start-2 bg-white rounded-[18px] flex items-center justify-center">
        <Profile  />
      </div>
      <div className="col-span-4 row-span-3 row-start-6 bg-white rounded-[18px]"><About /></div>
      <div className="col-span-4 row-span-3 col-start-[5.75] row-start-6 bg-white rounded-[18px]"><Contact /></div>
      <div className="col-span-4 row-span-6 col-start-9 row-start-2 bg-white rounded-[18px]"><Projects /></div>
      <div className="col-span-4 row-span-1 col-start-9 row-start-8 bg-white rounded-[18px]"><Socials /></div>
    </div>
  );
}