import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
import emptyhousebackground from "../../../dist/extras/emptyhouse.png";
import emptyimage from "../../../dist/extras/box1.png";
import instructionsBox from "../../../dist/extras/Untitled_Artwork.png";

const EmptyHouseDialogue = (props) => {
  const messages = [
    { type: "normal", text: "... ... ...", nextLine: 1 },
    {
      type: "normal",
      text: "...Nobody's home.",
      nextLine: 1,
    },
    { type: "normal", text: "...Were you expecting someone?", nextLine: 1 },
    {
      type: "choice",
      text: "Do you want the final ingredient?",
      yes: 1,
      no: 2,
    },
    { type: "normal", text: "...", nextLine: 2 },
    { type: "normal", text: "You must take it.", nextLine: -2 },
  ];

  return (
    <>
      <img src={emptyhousebackground} class="dialogueBackground"></img>
      <DialogueBox
        messages={messages}
        characterName={"???"}
        dialogueImage={emptyimage}
      ></DialogueBox>
      <img className="InstructionsBox" src={instructionsBox}></img>
      <div className="InstructionsText">'Enter' to continue, 'w' for YES, 's' for NO</div>
    </>
  );
};

export default EmptyHouseDialogue;
