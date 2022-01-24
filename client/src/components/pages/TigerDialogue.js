import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
// import tigerbackground from "../../../dist/characters/tiger1.png";
import TigerDialogueBackground from "./TigerDialogueBackground.js";
import tigerhead1 from "../../../dist/extras/tigerhead1.png";
import instructionsBox from "../../../dist/extras/Untitled_Artwork.png";

const TigerDialogue = ({ firstName }) => {
  const messages = [
    { type: "normal", text: "Hey there! I'm Mr. Tiger.", nextLine: 1 },
    {
      type: "normal",
      text: "Sorry about the noise. You know how appliances are.",
      nextLine: 1,
    },
    {
      type: "normal",
      text: `I heard from Ms. Lotl that you're cooking for your mom.`,
      nextLine: 1,
    },
    { type: "normal", text: "...I think that's sweet.", nextLine: 1 },
    {
      type: "normal",
      text: "Oh, it looks like you already have the first ingredient!",
      nextLine: 1,
    },
    { type: "choice", text: `Do you need another ingredient, ${firstName}?`, yes: 1, no: 2 },
    { type: "normal", text: "Off you go!", nextLine: 2 },
    { type: "normal", text: "Hey, you can't do that.", nextLine: -2 },
  ];

  return (
    <>
      <TigerDialogueBackground></TigerDialogueBackground>
      <DialogueBox
        messages={messages}
        characterName={"Mr. Tiger"}
        dialogueImage={tigerhead1}
      ></DialogueBox>
      <img className="InstructionsBox" src={instructionsBox}></img>
      <div className="InstructionsText">'Enter' to continue, 'w' for YES, 's' for NO</div>
    </>
  );
};

export default TigerDialogue;
