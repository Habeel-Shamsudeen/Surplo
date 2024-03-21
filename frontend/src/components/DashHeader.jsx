import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Surplo_Logo.jpeg";

import "./AppBarLanding.css";

export function DashHeader({ heading }) {
  return (
    <header className="app-bar flex justify-between px-4 py-2 h-14">
      <div className="flex items-center">
        <img src={logo} alt="Surplo Logo" className="rounded-full h-11 mr-4" />
        <h1 className="text-xl font-semibold">Surplo</h1>
      </div>
      <span
        style={{ textAlign: "center", width: "100%", fontSize: "2em" }}
        className="text-xl font-semibold"
      >
        {heading}
      </span>
    </header>
  );
}
