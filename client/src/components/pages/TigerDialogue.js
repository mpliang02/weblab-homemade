import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
import tigerbackground from "../../../dist/characters/tiger1.png";
import tigerhead1 from "../../../dist/extras/tigerhead1.png";

const messages = [
  { type: "normal", text: "Hey there! I'm Mr. Tiger. (Press ENTER to continue)", nextLine: 1 },
  {
    type: "normal",
    text: "Sorry about all of the noise. You know how appliances are.",
    nextLine: 1,
  },
  {
    type: "choice",
    text: "Oh, it looks like you already have the first ingredient! Do you need anything else? (Press UP for yes, DOWN for no)",
    yes: 1,
    no: 2,
  },
  { type: "normal", text: "Off you go!", nextLine: 2 },
  { type: "normal", text: "Hey, you can't do that.", nextLine: -2 },
];

const TigerDialogue = (props) => {
  return (
    <>
      <img src={tigerbackground} class="dialogueBackground"></img>
      <DialogueBox
        messages={messages}
        characterName={"Mr. Tiger"}
        dialogueImage={tigerhead1}
      ></DialogueBox>
    </>
  );
};

export default TigerDialogue;
