import React from "react";
import "./Card.css";

const Card = ({ data, onChat, onShowNumber, showNumber }) => {
  return (
    <div className="card">
      <img src={data.imageUrl} alt="Food" className="card__image" />
      <div className="card__container">
        <h4>
          <b className="josefin-slab card-title">
            {data.numberOfPlates} Plates
          </b>
        </h4>
        <p className="poppins-regular">{data.foodDescription}</p>
        <p className="poppins-regular">
          Price per item:
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "1.3em",
              paddingLeft: "1em",
            }}
          >
            ₹{data.pricePerItem}
          </span>
          <p
            className="poppins-regular"
            style={{
              marginTop: "1em",
            }}
          >
            Created:
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "1.3em",
                paddingLeft: "1em",
              }}
            >
              {" "}
              {data.creationDate}
            </span>
          </p>
          <p className="poppins-regular">
            Expiry:{" "}
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "1.3em",
                paddingLeft: "2.6em",
              }}
            >
              {data.expiryDate}
            </span>
          </p>
        </p>
      </div>
      <div className="card__footer">
        <button
          style={{ fontFamily: "monospace", fontSize: "1.2em" }}
          onClick={onChat}
        >
          Chat
        </button>
        <button
          style={{ fontFamily: "monospace", fontSize: "1.2em" }}
          onClick={onShowNumber}
        >
          {showNumber ? data.phoneNumber : "Show number"}
        </button>

        <button style={{ fontFamily: "monospace", fontSize: "1.2em" }}>
          Donate
        </button>
      </div>
    </div>
  );
};

export default Card;
