"use client";

import { useState, useEffect } from "react";

export default function Nav() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <nav className={`bg-white fixed top-0 w-full flex items-center justify-center md:justify-between py-3 px-6 gap-3 border-b transition-colors duration-300 ${scrolled ? "border-gray-200" : "border-transparent"}`}>
      <a className={`hidden md:block font-comfortaa text-lg font-bold text-gray-900 hover:text-gray-700 transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`} href="#hero">Noah Rothschild</a>
      <div className="flex items-center gap-4">
        <a className="font-comfortaa text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors duration-200" href="#projects">Projects</a>
        <a className="font-comfortaa text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors duration-200" href="#about">About</a>
        <a className="font-comfortaa text-sm uppercase tracking-wider text-gray-500 hover:text-gray-900 transition-colors duration-200" href="#contact">Contact</a>
      </div>
    
    <div className={`absolute top-full left-0 w-full h-4 bg-gradient-to-b from-white to-transparent pointer-events-none transition-opacity duration-300 ${scrolled ? "opacity-0" : "opacity-100"}`}></div>
      
    </nav>
  );
}