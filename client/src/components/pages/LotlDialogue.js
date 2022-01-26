import DialogueBox from "./LotlDialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
// import lotlbackground from "../../../dist/characters/lotl1.png";
import LotlDialogueBackground from "./LotlDialogueBackground.js";
import lotlhead1 from "../../../dist/extras/lotlhead1.png";
import instructionsBox from "../../../dist/extras/Untitled_Artwork.png";
import lotlMusic from "../../../dist/Music/Maarten Schellekens - Mallet Play.mp3";
import ReactAudioPlayer from "react-audio-player";

const LotlDialogue = ({ firstName }) => {
  const messages = [
    {
      type: "normal",
      text: `Hello, ${firstName}! My name is Ms. Lotl.`,
      nextLine: 1,
    },
    {
      type: "normal",
      text: `I heard you were making a meal for your mom!`,
      nextLine: 1,
    },
    {
      type: "normal",
      text: "I hope she's feeling better, poor thing.",
      nextLine: 1,
    },
    {
      type: "choice",
      text: "Do you need ingredients?",
      yes: 1,
      no: 2,
    },
    { type: "normal", text: "Perfect! Let's go!", nextLine: 2 },
    {
      type: "normal",
      text: "I'm sorry, but you can't do that.",
      nextLine: -2,
    },
  ];

  return (
    <>
      <ReactAudioPlayer src={lotlMusic} autoPlay loop></ReactAudioPlayer>
      <LotlDialogueBackground></LotlDialogueBackground>
      <DialogueBox
        messages={messages}
        characterName={"Ms. Lotl"}
        dialogueImage={lotlhead1}
      ></DialogueBox>
      <img className="InstructionsBox" src={instructionsBox}></img>
      <div className="InstructionsText">'Enter' to continue, 'w' for YES, 's' for NO</div>
    </>
  );
};

export default LotlDialogue;
