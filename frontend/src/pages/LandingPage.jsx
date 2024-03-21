import { useNavigate } from "react-router-dom"
import { AppBarLanding } from "../components/AppBarLanding";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import CallToAction from "../components/CallToAction";

export function LandingPage(){
    const navigate = useNavigate();
    return<div className="">
        <AppBarLanding/>
        <HeroSection/>
        <FeaturesSection/>
        <CallToAction/>
        <AboutUs/>
        <Footer/>
        
    </div>
}