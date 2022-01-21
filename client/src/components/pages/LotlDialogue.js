import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
// import lotlbackground from "../../../dist/characters/lotl1.png";
import LotlDialogueBackground from "./LotlDialogueBackground.js";
import lotlhead1 from "../../../dist/extras/lotlhead1.png";

const LotlDialogue = ({ firstName }) => {
  const messages = [
    {
      type: "normal",
      text: `Hello, ${firstName}! My name is Ms. Lotl.`,
      nextLine: 1,
    },
    {
      type: "normal",
      text: "I heard you were making a meal!",
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
      <LotlDialogueBackground></LotlDialogueBackground>
      <DialogueBox
        messages={messages}
        characterName={"Ms. Lotl"}
        dialogueImage={lotlhead1}
      ></DialogueBox>
    </>
  );
};

export default LotlDialogue;
