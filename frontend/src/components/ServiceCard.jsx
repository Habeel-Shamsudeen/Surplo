import React from "react";
import "./Card.css";
import assured from "../assets/assured.jpeg";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ data }) => {
    const navigate = useNavigate();
  return (
    <div className="card mt-3">
      <img src={data.imageUrl} alt="Food" className="card__image" />
      <div className="card__container">
        <div className="flex gap-3">
          <h3 className="font-bold">{data.title}</h3>
        </div>
        <h4>
          <b className="josefin-slab card-title">{data.desc}</b>
        </h4>
      </div>
      <div className="card__footer">
        <button
          className=""
          onClick={() => navigate('/#features')}
        >
          Ready to Connect
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
