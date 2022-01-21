import React, { Component, useState, useEffect } from "react";
import "./DialogueCSS.css";

import lotlbackground1 from "../../../dist/characters/lotl1.png";
import lotlbackground2 from "../../../dist/characters/lotl2.png";

const LotlDialogueBackground = () => {
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

  const imageArray = [lotlbackground1, lotlbackground2];

  return (
    <>
      <img className="dialogueBackground" src={imageArray[imageNumber]}></img>
    </>
  );
};

export default LotlDialogueBackground;
