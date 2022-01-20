import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
import lotlbackground from "../../../dist/characters/lotl1.png";
import lotlhead1 from "../../../dist/extras/lotlhead1.png";



const LotlDialogue = ({firstName}) => {
  const messages = [
    { type: "normal", text: `Hello ${firstName}! My name is Ms. Lotl. (Press ENTER to continue)`, nextLine: 1 },
    {
      type: "choice",
      text: "I heard you were making a meal! Do you need ingredients? (Press UP for yes, DOWN for no)",
      yes: 1,
      no: 2,
    },
    { type: "normal", text: "Perfect! Let's go!", nextLine: 2 },
    { type: "normal", text: "I'm sorry, but you can't do that.", nextLine: -2 },
  ];

  return (
    <>
      <img src={lotlbackground} class="dialogueBackground"></img>
      <DialogueBox
        messages={messages}
        characterName={"Ms. Lotl"}
        dialogueImage={lotlhead1}
      ></DialogueBox>
    </>
  );
};

export default LotlDialogue;
