import React, { Component, useState, useEffect } from "react";
//import "./FinalDishCSS.css";

import finaldish1 from "../../../dist/Final Dish Screen/final dish screen1.png";
import finaldish2 from "../../../dist/Final Dish Screen/final dish screen2.png";

const FinalDish = () => {
  const [imageNumber, setImageNumber] = useState(0);

  useEffect(() => {
    const timer = () => {
      setImageNumber((prevImageNumber) => 1 - prevImageNumber);
    };
    setInterval(timer, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const imageArray = [finaldish1, finaldish2];

  return (
    <>
      <img className="homePageImage" src={imageArray[imageNumber]}></img>
    </>
  );
};

export default FinalDish;
