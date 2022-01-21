import React, { Component, useState, useEffect } from "react";
import "./MomAnimationCSS.css";

import mom1 from "../../../dist/characters/mom1.png";
import mom2 from "../../../dist/characters/mom2.png";
import grave from "../../../dist/characters/grave.png";

const Mom = () => {
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

  const imageArray = [mom1, mom2];

  return (
    <>
      <img className="fadeInOut" src={imageArray[imageNumber]}></img>
      <img className="fadeInTransition" src={grave}></img>
    </>
  );
};

export default Mom;
