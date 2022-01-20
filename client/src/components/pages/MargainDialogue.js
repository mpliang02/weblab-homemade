import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
import margainbackground from "../../../dist/characters/margain1.png";
import margainhead1 from "../../../dist/extras/margainhead1.png";



const MargainDialogue = ({firstName}) => {
  const messages = [
    { type: "normal", text: "...H-hey. I'm Mr. Margain. (Press ENTER to continue)", nextLine: 1 },
    {
      type: "normal",
      text: "...I-I'm really sorry about the mess. But please make yourself at home.",
      nextLine: 1,
    },
    {
      type: "choice",
      text: "...I don't have much, but for a little bit of your time, I can give you an ingredient. (Press UP for yes, DOWN for no)",
      yes: 1,
      no: 2,
    },
    { type: "normal", text: `...Good luck, ${firstName}.`, nextLine: 2 },
    { type: "normal", text: "...You can't do that.", nextLine: -2 },
  ];

  return (
    <>
      <img src={margainbackground} class="dialogueBackground"></img>
      <DialogueBox
        messages={messages}
        characterName={"Mr. Margain"}
        dialogueImage={margainhead1}
      ></DialogueBox>
    </>
  );
};

export default MargainDialogue;
