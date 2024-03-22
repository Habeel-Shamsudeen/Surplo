import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { DashHeader } from "../components/DashHeader";
import dummyData from "../assets/dummy_non_expired";
import Card from "../components/Card";
import expiredFoodData from "../assets/dummy_expired";

export function ExpiredFood() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleChat = (phoneNumber) => {
    try {
      const encodedPhoneNumber = encodeURIComponent(phoneNumber);
      const url = `https://wa.me/${encodedPhoneNumber}`;
      window.open(url, "_blank"); // Open in a new tab
    } catch (error) {
      console.error("Error opening WhatsApp chat:", error);
      // Handle errors elegantly for a better user experience
      alert("Something went wrong. Please ensure WhatsApp is installed on your device.");
    }
  };

  const handleShowNumber = (index) => {
    setSelectedCard(index);
  };

  useEffect(() => {
    async function getMyData() {
      try {
        const response = await axios.get(
          "https://surplo-api.vercel.app/api/v1/user/me",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        if (response.data.loggedIn) {
          // Do something if user is logged in
        }
      } catch (err) {
        navigate('/signin');
      }
    }
    getMyData();
  }, []);

  return (
    <div className=" bg-primary-100">
      <DashHeader />
      <div className="non-expired bg-primary-100">
        <div className="cards">
          {expiredFoodData.map((data, index) => (
            <Card
              key={index}
              data={data}
              onChat={() => handleChat(data.phoneNumber)} // Pass phoneNumber to handleChat
              onShowNumber={() => handleShowNumber(index)}
              showNumber={selectedCard === index}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
}
