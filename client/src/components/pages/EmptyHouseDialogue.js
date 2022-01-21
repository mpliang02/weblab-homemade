import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
import emptyhousebackground from "../../../dist/extras/emptyhouse.png";
import emptyimage from "../../../dist/extras/box1.png";

const messages = [
  { type: "normal", text: "... ... ...", nextLine: 1 },
  {
    type: "normal",
    text: "...Nobody's home.",
    nextLine: 1,
  },
  {
    type: "choice",
    text: "Here's the final ingredient.",
    yes: 1,
    no: 2,
  },
  { type: "normal", text: "...", nextLine: 2 },
  { type: "normal", text: "You must take it.", nextLine: -2 },
];

const EmptyHouseDialogue = (props) => {
  return (
    <>
      <img src={emptyhousebackground} class="dialogueBackground"></img>
      <DialogueBox
        messages={messages}
        characterName={"???"}
        dialogueImage={emptyimage}
      ></DialogueBox>
    </>
  );
};

export default EmptyHouseDialogue;
