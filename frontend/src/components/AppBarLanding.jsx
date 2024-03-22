import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Surplo_Logo.jpeg";

import "./AppBarLanding.css"; // Import custom CSS for styling

export function AppBarLanding() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const subheadings = [
    { text: "Expired", path: "/foodsurplus/expired" },
    { text: "Non-Expired", path: "/foodsurplus/nonexpired" },
    { text: "Subscription", path: "/companyservices" },
    { text: "Industrial Symbiosis", path: "/industrialsymbiosis" },
  ];

  const handleSubheadingClick = (subheading) => {
    navigate(subheading.path);
    setIsDropdownOpen(false); // Close dropdown after navigation
  };

  return (
    <header className="app-bar flex justify-between px-4 py-2 h-14">
      <div className="flex items-center">
        <img src={logo} alt="Surplo Logo" className="rounded-full h-11 mr-4" />
        <h1 className="text-xl font-semibold">Surplo</h1>
      </div>

      <nav className="flex gap-8">
        <div className="dropdown">
          <button className="font-medium rounded-lg text-md px-1 py-2 me-1 mb-2  focus:outline-none hover:text-secondary-400 border-none" onClick={toggleDropdown}>
            Food Surplus
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              {subheadings.map((subheading) => (
                <a
                  key={subheading.text} // Add key for better performance
                  className="hover:bg-text-300"
                  onClick={() => handleSubheadingClick(subheading)}
                >
                  {subheading.text}
                </a>
              ))}
            </div>
          )}
        </div>
        <a href="#features" className="mt-2 hover:underline">
          Features
        </a>
        <a href="#about" className="mt-2 hover:underline">
          About Us
        </a>
        <a href="#Support" className="mt-2 hover:underline">
          Support
        </a>
        <button
          className="btn btn-primary bg-primary-500 hover:bg-secondary-400"
          onClick={() => navigate("/signin")}
        >
          Login
        </button>
        <button className="btn btn-secondary" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </nav>
    </header>
  );
}
