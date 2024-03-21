import React from "react";
import "./Card.css";

const Card = ({ data, onChat, onShowNumber, showNumber }) => {
  return (
    <div className="card">
      <img src={data.imageUrl} alt="Food" className="card__image" />
      <div className="card__container">
        <h4>
          <b>{data.numberOfPlates} Plates</b>
        </h4>
        <p>{data.foodDescription}</p>
        <p>Price per item: {data.pricePerItem}</p>
      </div>
      <div className="card__footer">
        <button onClick={onChat}>Chat</button>
        <button onClick={onShowNumber}>
          {showNumber ? data.phoneNumber : "Show number"}
        </button>
      </div>
    </div>
  );
};

export default Card;
