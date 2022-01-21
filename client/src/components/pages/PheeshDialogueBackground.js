import React, { Component, useState, useEffect } from "react";
import "./DialogueCSS.css";

import pheeshbackground1 from "../../../dist/characters/pheesh1.png";
import pheeshbackground2 from "../../../dist/characters/pheesh2.png";

const PheeshDialogueBackground = () => {
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

  const imageArray = [pheeshbackground1, pheeshbackground2];

  return (
    <>
      <img className="dialogueBackground" src={imageArray[imageNumber]}></img>
    </>
  );
};

export default PheeshDialogueBackground;
