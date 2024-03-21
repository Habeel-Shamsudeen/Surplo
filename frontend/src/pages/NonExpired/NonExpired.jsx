import React, { useState } from "react";
import Card from "../../components/Card";
import dummyData from "../../assets/dummy_non_expired";
import "./NonExpired.css";
import { DashHeader } from "../../components/DashHeader";

const NonExpired = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleShowNumber = (index) => {
    setSelectedCard(index);
  };

  const handleChat = () => {
    // Handle chat functionality here
  };

  return (
    <>
      <DashHeader heading="Non Expired" />
      <div className="non-expired">
        <div className="cards">
          {dummyData.map((data, index) => (
            <Card
              key={index}
              data={data}
              onChat={handleChat}
              onShowNumber={() => handleShowNumber(index)}
              showNumber={selectedCard === index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NonExpired;
