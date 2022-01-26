import React, { Component, useState, useEffect } from "react";
import "./DialogueCSS.css";

import tigerbackground1 from "../../../dist/characters/AngerEdited.png";
import tigerbackground2 from "../../../dist/characters/Anger2.png";

const TigerDialogueBackground = () => {
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

  const imageArray = [tigerbackground1, tigerbackground2];

  return (
    <>
      <img className="dialogueBackground" src={imageArray[imageNumber]}></img>
    </>
  );
};

export default TigerDialogueBackground;
