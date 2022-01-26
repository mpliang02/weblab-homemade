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



const Lotl2Dialogue = ({ firstName }) => {
  const [run, setRun] = useState(false);
  const messages = [
    {
      type: "normal",
      text: `Nice job, ${firstName}!`,
      nextLine: 1,
    },
    {
      type: "normal",
      text: `So…in actuality I only have one of the things you wanted…I'm sorry about that. I really thought I had everything.`,
      nextLine: 1,
    },
    {
      type: "normal",
      text: "Truthfully, this dish is such a great idea! You should visit Mr. Tiger's house - I'm sure he'll have something.",
      nextLine: 1,
    },
    {
      type: "normal",
      text: "Hm? What's that? ",
      nextLine: 1,
    },
    {
      type: "normal",
      text: "...",
      nextLine: 1,
    },
    {
      type: "normal",
      text: "......",
      nextLine: 1,
    },
    {
      type: "choice",
      text: "I'm sure everything will be fine. On your way now! *Press Y*",
      yes: 1,
    },
  ];

  addEventListener('keyup', ({keyCode}) => {
    switch (keyCode) {
        case 89:
          setRun(true)
          break

        case 78:
            setRun(false)
            break
          
        case 89:
          setRun(true)
          break
    }
   })


  if (run) {
    return <Redirect to="/map" />;
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

export default Lotl2Dialogue;
