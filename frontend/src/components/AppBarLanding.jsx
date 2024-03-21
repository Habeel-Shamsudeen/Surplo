import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Surplo_Logo.jpeg";

import "./AppBarLanding.css"; // Import custom CSS for styling

export function AppBarLanding() {
  const navigate = useNavigate();

  return (
    <header className="app-bar flex justify-between px-4 py-2 h-14">
      <div className="flex items-center">
        <img src={logo} alt="Surplo Logo" className="rounded-full h-11 mr-4" />
        <h1 className="text-xl font-semibold">Surplo</h1>
      </div>

      <nav className="flex gap-8">
      <a href="#features" className="mt-2 hover:underline">Features</a>
        <a href="#about" className="mt-2 hover:underline">About Us</a>
        <a href="#Support" className="mt-2 hover:underline">Support</a>
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