import React, { Component, useState, useEffect } from "react";
//import "./Title.css";
import "./homepage css.css";
import ReactAudioPlayer from "react-audio-player";
import homeMusic from "../../../dist/Music/Julian Winter - Home.mp3";
import homepage1 from "../../../dist/extras/homepage1.png";
import homepage2 from "../../../dist/extras/homepage2.png";

const Title = () => {
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

  const imageArray = [homepage1, homepage2];

  return (
    <>
      <img className="homePageImage" src={imageArray[imageNumber]}></img>
      <ReactAudioPlayer src={homeMusic} autoPlay loop></ReactAudioPlayer>
    </>
  );
};

export default Title;
