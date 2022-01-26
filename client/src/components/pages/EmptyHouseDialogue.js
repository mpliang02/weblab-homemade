import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component, useState } from "react";
import emptyhousebackground from "../../../dist/extras/emptyhouse.png";
import emptyimage from "../../../dist/extras/box1.png";
import instructionsBox from "../../../dist/extras/Untitled_Artwork.png";
import ReactAudioPlayer from "react-audio-player";
import emptyhouseMusic from "../../../dist/Music/cryptic scenery - Åtminstone.mp3";
import { Redirect } from "@reach/router";

const EmptyHouseDialogue = (props) => {
  const [run, setRun] = useState(false);
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

  addEventListener("keyup", ({ keyCode }) => {
    switch (keyCode) {
      case 87:
        setRun(true);
        break;

      case 83:
        setRun(false);
        break;

      case 87:
        setRun(true);
        break;
    }
  });

  if (run) {
    return <Redirect to="/end" />;
  }

  return (
    <>
      <ReactAudioPlayer src={emptyhouseMusic} autoPlay loop></ReactAudioPlayer>
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
