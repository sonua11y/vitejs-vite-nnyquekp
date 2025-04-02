import React from "react";

const DestinationCard = ({ destination }) => {
  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "300px",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const contentStyle = {
    padding: "15px",
  };

  const nameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const locationStyle = {
    color: "gray",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "14px",
    color: "#333",
    marginBottom: "10px",
  };

  const priceStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#007BFF",
  };

  return (
    <div style={cardStyle}>
      <img src={destination.image} alt={destination.name} style={imageStyle} />
      <div style={contentStyle}>
        <h2 style={nameStyle}>{destination.name}</h2>
        <p style={locationStyle}>{destination.location}</p>
        <p style={descriptionStyle}>{destination.description}</p>
        <p style={priceStyle}>{destination.price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
