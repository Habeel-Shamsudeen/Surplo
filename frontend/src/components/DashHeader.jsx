import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Surplo_Logo.jpeg";
import "./AppBarLanding.css"; // Import custom CSS for styling

export function DashHeader() {
  const navigate = useNavigate();

  const navigationLinks = [
    { text: "Expired Food", path: "/foodsurplus/expired" },
    { text: "Non-Expired Food", path: "/foodsurplus/nonexpired" },
    { text: "Industrial Symbiosis", path: "/industrialsymbiosis" },
    { text: "Company Services", path: "/company-services" }, // Add path for company services
  ];

  const handleNavigationClick = (link) => {
    navigate(link.path);
  };

  return (
    <header className="app-bar flex justify-between px-4 py-2 h-14">
      <div className="flex items-center">
        <img src={logo} alt="Surplo Logo" className="rounded-full h-11 mr-4" />
        <h1 className="text-xl font-semibold">Surplo</h1>
      </div>

      <nav className="flex gap-8">
        {navigationLinks.map((link) => (
          <button
            key={link.text} // Add key for better performance
            className="btn btn-primary bg-primary-500 hover:bg-secondary-400 px-4 py-2 rounded-md text-md focus:outline-none"
            onClick={() => handleNavigationClick(link)}
          >
            {link.text}
          </button>
        ))}
      </nav>
    </header>
  );
}
