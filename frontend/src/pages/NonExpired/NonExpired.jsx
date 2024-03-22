import React, { useState } from "react";
import Card from "../../components/Card";
import dummyData from "../../assets/dummy_non_expired";
import "./NonExpired.css";
import { DashHeader } from "../../components/DashHeader";
import { useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NonExpired = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleShowNumber = (index) => {
    setSelectedCard(index);
  };

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
  const navigate = useNavigate();
  useEffect(() => {
      async function getMyData() {
        try {
          const response = await axios.get(
            "http://localhost:3000/api/v1/user/me",
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          if(response.data.loggedIn){
            
          }
        } catch (err) {
          navigate('/signin')
        }
      }
      getMyData();
    }, []);

  return (
    <>
      <DashHeader heading="Non Expired" />
      <div className="non-expired bg-primary-100">
        <div className="cards">
          {dummyData.map((data, index) => (
            <Card
              key={index}
              data={data}
              onChat={handleChat}
              onShowNumber={() => handleShowNumber(index)}
              showNumber={selectedCard === index}
              extra={'donate'}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NonExpired;
