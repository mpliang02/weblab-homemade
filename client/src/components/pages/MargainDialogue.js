import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
// import margainbackground from "../../../dist/characters/margain1.png";
import MargainDialogueBackground from "./MargainDialogueBackground.js";
import margainhead1 from "../../../dist/extras/margainhead1.png";
import instructionsBox from "../../../dist/extras/Untitled_Artwork.png";

const MargainDialogue = ({ firstName }) => {
  const messages = [
    { type: "normal", text: "...H-hey. I'm Mr. Margain.", nextLine: 1 },
    {
      type: "normal",
      text: "...I-I'm really sorry about the mess...",
      nextLine: 1,
    },
    { type: "normal", text: `...Y-you...you're making food? For your mom?`, nextLine: 1 },
    { type: "normal", text: `...${firstName}...Really? Well...`, nextLine: 1 },
    { type: "normal", text: "...I suppose it isn't my place.", nextLine: 1 },
    {
      type: "normal",
      text: "...I-I don't have much, but for a little bit of your time...",
      nextLine: 1,
    },
    {
      type: "choice",
      text: "...I-I can give you an ingredient, if you want?",
      yes: 1,
      no: 2,
    },
    { type: "normal", text: `...Good luck, ${firstName}.`, nextLine: 2 },
    { type: "normal", text: "...You can't do that.", nextLine: -2 },
  ];

  return (
    <>
      <MargainDialogueBackground></MargainDialogueBackground>
      <DialogueBox
        messages={messages}
        characterName={"Mr. Margain"}
        dialogueImage={margainhead1}
      ></DialogueBox>
      <img className="InstructionsBox" src={instructionsBox}></img>
      <div className="InstructionsText">'Enter' to continue, 'w' for YES, 's' for NO</div>
    </>
  );
};

export default MargainDialogue;
