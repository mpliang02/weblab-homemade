import DialogueBox from "./FroggyDialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
// import lotlbackground from "../../../dist/characters/lotl1.png";
import MapBackground from "./MapBackground.js";
import froggy from "../../../dist/mrfrog.png";
import instructionsBox from "../../../dist/extras/Untitled_Artwork.png";
import welcomeMusic from "../../../dist/Music/M33 Project - Pal de Pluja.mp3";
import ReactAudioPlayer from "react-audio-player";

const FroggyDialogue = ({ firstName, recipe }) => {
  const messages = [
    {
      type: "normal",
      text: `${firstName}! It's so nice to see you!`,
      nextLine: 1,
    },
    {
      type: "normal",
      text: `I'm Mr. Frog. I'm helping you make ${recipe}!`,
      nextLine: 1,
    },
    {
      type: "normal",
      text: "Each one of these five houses has an ingredient.",
      nextLine: 1,
    },
    { type: "normal", text: "Go knock on each door and see what they have!", nextLine: 1 },
  ];

  return (
    <>
      <ReactAudioPlayer src={welcomeMusic} autoPlay loop></ReactAudioPlayer>
      <MapBackground></MapBackground>
      <DialogueBox
        messages={messages}
        characterName={"Mr. Frog"}
        dialogueImage={froggy}
      ></DialogueBox>
      <img className="froggyInstructionsBox" src={instructionsBox}></img>
      <div className="froggyInstructionsText">'Enter' to continue, 'w' for YES, 's' for NO</div>
    </>
  );
};

export default FroggyDialogue;
