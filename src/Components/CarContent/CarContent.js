import "./CarContent.css";
import React from "react";

const CarContent = ({ currentPhoto, speed , range}) => {
 
  return (
    <div className="car-content">
      <div className="car-image-content">
        <img src={currentPhoto} alt="Current" className="img-fluid" />
      </div>
      <div className="car-details-content">
        <div className="details-car">
          <div className="range">
            <h3>{range} km</h3>
            <p className="text-center">Range</p>
          </div>
        </div>
        <div className="details-car">
          <div className="speed">
            <h3>{speed} km/h</h3>
            <p className="text-center">Top Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarContent;
