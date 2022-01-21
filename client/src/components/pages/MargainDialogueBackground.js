import React, { Component, useState, useEffect } from "react";
import "./DialogueCSS.css";

import margainbackground1 from "../../../dist/characters/margain1.png";
import margainbackground2 from "../../../dist/characters/margain2.png";

const MargainDialogueBackground = () => {
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

  const imageArray = [margainbackground1, margainbackground2];

  return (
    <>
      <img className="dialogueBackground" src={imageArray[imageNumber]}></img>
    </>
  );
};

export default MargainDialogueBackground;
