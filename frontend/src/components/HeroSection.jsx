import React from "react";
import heroImage from '../assets/heroImage.jpg';
import './heroSection.css'; // Import your CSS file for styles
import { useNavigate } from "react-router-dom";

function HeroSection() {
    const navigate = useNavigate();
  return (
    <section className="hero-section flex justify-center items-center h-screen bg-cover bg-center bg-primary-100">
      <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }}></div>
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <h1 className="text-5xl font-bold text-primary-600 mb-4">Turning Surplus into Support</h1>
        <p className="text-xl text-text-800">
          Effortlessly connect surplus food with those in need. Donors are rewarded, reducing waste and fostering giving for a sustainable impact.
        </p>
        <button className="btn btn-primary mt-8 bg-secondary-500" onClick={()=>{
            navigate('/signin')
        }}>Get Started</button>
      </div>
    </section>
  );
}

export default HeroSection;
