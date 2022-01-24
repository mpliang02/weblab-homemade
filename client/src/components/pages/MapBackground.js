import React, { Component, useState, useEffect } from "react";
import "./DialogueCSS.css";

import mapbackground1 from "../../../dist/Houses Assets/Static/all houses map static.png";
import mapbackground2 from "../../../dist/Houses Assets/Static/all houses 2.png";

const MapBackground = () => {
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

  const imageArray = [mapbackground1, mapbackground2];

  return (
    <>
      <img className="dialogueBackground" src={imageArray[imageNumber]}></img>
    </>
  );
};

export default MapBackground;
