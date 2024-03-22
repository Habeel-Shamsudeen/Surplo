import React from "react";
import "./Card.css";
import assured from "../assets/assured.jpeg";

const IndustrialCard = ({ data }) => {
  return (
    <div className="card mt-3">
      <img src={data.imageUrl} alt="Food" className="card__image" />
      <div className="card__container">
        <div className="flex gap-3">
          <h3 className="font-bold">{data.title}</h3>
        </div>
        <h4>
          <b className="josefin-slab card-title">{data.desc} Plates</b>
        </h4>
        <p className="poppins-regular">{data.waste}</p>
        <p className="poppins-regular">
          Price:
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "1.3em",
              paddingLeft: "1em",
            }}
          >
            ₹{data.price}
          </span>
        </p>
      </div>
      <div className="card__footer">
        <button
          style={{ fontFamily: "monospace", fontSize: "1.2em" }}
          onClick={() => window.open(data.compURL)}
        >
          Ready to Connect
        </button>
      </div>
    </div>
  );
};

export default IndustrialCard;
