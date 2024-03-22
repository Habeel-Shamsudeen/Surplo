import garden from './gar.jpeg';
import sanitary from './san.jpeg';
import organic from './org.jpeg'
const serviceCardData = [
    {
      title: "Garden Waste Management",
      desc: "We professionally dispose of garden waste, including leaves, branches, and other organic debris. Our services contribute to a clean and green environment for your premises.",
      imageUrl: garden,
      key: "garden-waste", // Unique key for the card (optional)
    },
    {
      title: "Sanitary Waste Management",
      desc: "Our discreet and responsible management of sanitary waste maintains hygiene while ensuring environmentally safe disposal methods.",
      imageUrl: sanitary,
      key: "dry-waste", 
    },
    {
      title: "Organic Waste Management",
      desc: "We provide sustainable and eco-conscious solutions for organic waste, including food scraps and biodegradable materials. Our environmentally friendly practices guarantee proper disposal.",
      imageUrl: organic,
      key: "organic-waste", // Unique key for the card (optional)
    },
    // Add more service cards following this structure
  ];
  
  export default serviceCardData;