"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Downbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (!isVisible) setIsVisible(true); // Trigger pop-in
      } else {
        if (isVisible) setIsVisible(false); // Trigger pop-out
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <>
      <div
        className={`w-160 h-20 rounded-4xl backdrop-blur-lg bg-black/20 fixed left-1/2 transform 
            -translate-x-1/2 flex flex-row justify-around items-center md:hidden max-md:w-80 max-md:bottom-0 max-md:mb-16 transition-all duration-600 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
        }`}
      >
        <Link href="/">
          <button
            className="w-20 h-15 bg-black/2 rounded-4xl text-black text-2xl transition-all duration-700 ease-in-out hover:w-100 hover:scale-105 hover:shadow-lg"
          >
            Home
          </button>
        </Link>
        <Link href="/sobre">
          <button
            className="w-20 h-15 bg-black/2 rounded-4xl text-black text-2xl transition-all duration-700 ease-in-out hover:w-100 hover:scale-105 hover:shadow-lg"
          >
            Sobre
          </button>
        </Link>

        
      </div>
    </>
  );
};

export default Downbar;