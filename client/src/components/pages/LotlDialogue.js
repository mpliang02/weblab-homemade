import DialogueBox from "./LotlDialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component, useState } from "react";
// import lotlbackground from "../../../dist/characters/lotl1.png";
import LotlDialogueBackground from "./LotlDialogueBackground.js";
import lotlhead1 from "../../../dist/extras/lotlhead1.png";
import instructionsBox from "../../../dist/extras/Untitled_Artwork.png";
import lotlMusic from "../../../dist/Music/Maarten Schellekens - Mallet Play.mp3";
import ReactAudioPlayer from "react-audio-player";
import { Redirect } from "@reach/router";

const LotlDialogue = ({ firstName }) => {
  const [run, setRun] = useState(false);
  const messages = [
    {
      type: "normal",
      text: `Hey, ${firstName}! Nice to finally meet you - You can call me Ms.Lotl if you'd like. `,
      nextLine: 1,
    },
    {
      type: "normal",
      text: `I heard about what happened…`,
      nextLine: 1,
    },
    {
      type: "normal",
      text: "Oh? I don't need to worry? She's…she's at home right now? ",
      nextLine: 1,
    },
    {
      type: "normal",
      text: "...",
      nextLine: 1,
    },
    {
      type: "normal",
      text: "Ahem...well, you said you're making a meal for…? That's so cute!",
      nextLine: 1,
    },
    {
      type: "choice",
      text: "Mmm...I think I've got everything you need for that dish. Do you want anything?",
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

  addEventListener("keyup", ({ keyCode }) => {
    switch (keyCode) {
      case 87:
        setRun(true);
        break;

      case 40:
        setRun(false);
        break;

      case 87:
        setRun(true);
        break;
    }
  });

  if (run) {
    return <Redirect to="/runLotl" />;
  }

  return (
    <>
      <ReactAudioPlayer src={lotlMusic} autoPlay loop></ReactAudioPlayer>
      <LotlDialogueBackground></LotlDialogueBackground>
      <DialogueBox
        messages={messages}
        characterName={"Ms. Lotl"}
        dialogueImage={lotlhead1}
      ></DialogueBox>
      <img className="InstructionsBox" src={instructionsBox}></img>
      <div className="InstructionsText">'Enter' to continue, 'w' for YES, 's' for NO</div>
    </>
  );
};

export default LotlDialogue;
