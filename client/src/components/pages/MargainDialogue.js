import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
// import margainbackground from "../../../dist/characters/margain1.png";
import MargainDialogueBackground from "./MargainDialogueBackground.js";
import margainhead1 from "../../../dist/extras/margainhead1.png";

const MargainDialogue = ({ firstName }) => {
  const messages = [
    { type: "normal", text: "...H-hey. I'm Mr. Margain.", nextLine: 1 },
    {
      type: "normal",
      text: "...I-I'm really sorry about the mess...",
      nextLine: 1,
    },
    {
      type: "normal",
      text: "...I don't have much, but for a little bit of your time...",
      nextLine: 1,
    },
    {
      type: "choice",
      text: "...I can give you an ingredient, if you want?",
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
    </>
  );
};

export default MargainDialogue;
