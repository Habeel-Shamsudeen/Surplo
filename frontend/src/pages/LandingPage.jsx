import { useNavigate } from "react-router-dom"
import { AppBarLanding } from "../components/AppBarLanding";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";

export function LandingPage(){
    const navigate = useNavigate();
    return<div className="h-screen bg-text-200">
        <AppBarLanding/>
        <HeroSection/>
        <FeaturesSection/>
        <Footer/>
        
    </div>
}