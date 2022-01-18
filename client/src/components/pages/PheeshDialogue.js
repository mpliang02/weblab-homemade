import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
import pheeshbackground from "../../../dist/characters/pheesh1.png";
import pheeshhead1 from "../../../dist/extras/pheeshhead1.png";

const messages = [
  { type: "normal", text: "GLUG GLUG GLUG GLUG (Press ENTER to continue)", nextLine: 1 },
  { type: "normal", text: "... ... ...", nextLine: 1 },
  {
    type: "normal",
    text: "...Just kidding. I can talk.",
    nextLine: 1,
  },
  { type: "normal", text: "You've got a lot already. But you already knew that.", nextLine: 1 },
  {
    type: "choice",
    text: "Do you want to keep going? (Press UP for yes, DOWN for no)",
    yes: 1,
    no: 2,
  },
  { type: "normal", text: "...Interesting.", nextLine: 2 },
  { type: "normal", text: "You know you can't do that.", nextLine: -2 },
];

const PheeshDialogue = (props) => {
  return (
    <>
      <img src={pheeshbackground} class="dialogueBackground"></img>
      <DialogueBox
        messages={messages}
        characterName={"Mr. Pheesh"}
        dialogueImage={pheeshhead1}
      ></DialogueBox>
    </>
  );
};

export default PheeshDialogue;
