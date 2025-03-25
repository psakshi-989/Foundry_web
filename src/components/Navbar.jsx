import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import symbol from "../assets/symbol.svg";
import font from "../assets/font.svg";
import { Mail, Phone, MapPin, Menu, X } from "lucide-react"; // Using Lucide icons for consistency

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-5 lg:px-10 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={symbol} alt="Company Logo" className="h-10 md:h-8" />
          <img src={font} alt="Company Name" className="h-10 md:h-8" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl z-50 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>

        {/* Background overlay when menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Nav Links */}
        <ul
          ref={menuRef}
          className={`menu fixed top-0 right-0 h-full bg-white shadow-lg w-64 
          flex flex-col items-center space-y-4 p-6 transform transition-transform duration-300 
          md:static md:w-auto md:flex-row md:space-y-0 md:space-x-6 lg:space-x-8 md:px-0
          md:bg-transparent md:shadow-none justify-center md:ml-10 lg:mx-10
          ${isOpen ? "translate-x-0 z-50" : "translate-x-full"} md:translate-x-0`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Products", path: "/products" },
            { name: "Quality & Certifications", path: "/quality" },
            { name: "Contact Us", path: "/contact" }
          ].map((item, index) => (
            <li key={index} className="w-full md:w-auto text-center md:text-left">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative group text-base lg:text-lg font-semibold block py-2 text-gray-700 hover:text-red-600 transition-all duration-500 ${
                    isActive ? "text-red-600" : ""
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-red-600 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact Icons */}
        <div className="hidden md:flex space-x-4 text-gray-700 text-xl">
          <a
            href="tel:+919924870978"
            className="hover:text-red-500 transition-colors"
            aria-label="Call Us"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="mailto:squarefoundry@gmail.com"
            className="hover:text-red-500 transition-colors"
            aria-label="Email Us"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://maps.app.goo.gl/x5ibRxWKWvorYvQo9"
            className="hover:text-red-500 transition-colors"
            aria-label="Find Us on Google Maps"
          >
            <MapPin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}