import React from "react";
import myImage from "../../assets/said.svg"; 

export const ManageCard = ({ title, number, text }) => {
  return (
    <div>
        <img src={myImage} alt={title}></img> 
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  );
};