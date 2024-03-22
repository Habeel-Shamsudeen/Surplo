import React, { useState } from "react";
import "./Card.css";
import assured from "../assets/assured.jpeg";
import { Popup } from "./Popup";

const Card = ({ data, onChat, onShowNumber, showNumber, extra }) => {
  const [trigger,setTrigger] = useState(false)
  return (
    <div className="card mt-3">
      <img src={data.imageUrl} alt="Food" className="card__image" />
      <div className="card__container">
        <div className="flex gap-3">
          <h3 className="font-bold">{data.title}</h3>
          {data.assured ? (
            <img src={assured} className="h-9 w-19" />
          ) : (
            <div></div>
          )}
        </div>

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
              {""}
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
        {data.assured ? (
          <button style={{ fontFamily: "monospace", fontSize: "1.2em" }} onClick={()=>{
            window.open("https://youtu.be/83dhSpTURf8?si=1CHooBB_KO20gVu-")
          }}>
            Learn more
          </button>
        ) : (
          <button style={{ fontFamily: "monospace", fontSize: "1.2em" }} onClick={()=>setTrigger(e=>!e)}>
            {extra}
          </button>
        )}
        <Popup trigger={trigger}></Popup>
      </div>
    </div>
  );
};

export default Card;
