import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/Surplo_Logo.jpeg'

export function AppBarLanding({ name, onChange }) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between px-4 py-2 border-none shadow-sm h-14 bg-primary-300">
      <div className="flex">
        <img src={logo} alt="" className="rounded-full h-11" />

        <div className="text-3xl font-semibold flex flex-col justify-center ml-2">
          Surplo
        </div>
      </div>

      <div className="flex">
        <div className="flex justify-center h-full gap-8">
          <button className="bg-accent-500 border-none rounded-lg p-3 text-lg">Signin</button>
          <button className="bg-accent-500 border-none rounded-lg">Signup</button>
        </div>
      </div>
    </div>
  );
}
