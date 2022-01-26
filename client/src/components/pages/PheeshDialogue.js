import DialogueBox from "./PheeshDialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component, useState } from "react";
// import pheeshbackground from "../../../dist/characters/pheesh1.png";
import PheeshDialogueBackground from "./PheeshDialogueBackground.js";
import pheeshhead1 from "../../../dist/extras/pheeshhead1.png";
import instructionsBox from "../../../dist/extras/Untitled_Artwork.png";
import ReactAudioPlayer from "react-audio-player";
import pheeshMusic from "../../../dist/Music/Marcos H. Bolanos - Suspects.mp3";
import { Redirect } from "@reach/router";


const PheeshDialogue = ({ firstName }) => {
  const [run, setRun] = useState(false);
  const messages = [
    { type: "normal", text: "GLUG GLUG GLUG GLUG", nextLine: 1 },
    { type: "normal", text: "... ... ...", nextLine: 1 },
    {
      type: "normal",
      text: "...Just kidding. I can talk.",
      nextLine: 1,
    },
    {
      type: "normal",
      text: `...${firstName}, you've got a lot already.`,
      nextLine: 1,
    },
    { type: "normal", text: "...But you already knew that, didn't you?", nextLine: 1 },
    { type: "normal", text: `Who are you cooking for, really?`, nextLine: 1 },
    { type: "normal", text: "...Just some food for thought.", nextLine: 1 },
    {
      type: "choice",
      text: `Do you want to keep going?`,
      yes: 1,
      no: 2,
    },
    { type: "normal", text: "...Interesting.", nextLine: 2 },
    { type: "normal", text: "You know you can't do that.", nextLine: -2 },
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
    return <Redirect to="/runPheesh" />;
  }

  return (
    <>
      <ReactAudioPlayer src={pheeshMusic} autoPlay loop></ReactAudioPlayer>
      <PheeshDialogueBackground></PheeshDialogueBackground>
      <DialogueBox
        messages={messages}
        characterName={"Mr. Pheesh"}
        dialogueImage={pheeshhead1}
      ></DialogueBox>
      <img className="InstructionsBox" src={instructionsBox}></img>
      <div className="InstructionsText">'Enter' to continue, 'w' for YES, 's' for NO</div>
    </>
  );
};

export default PheeshDialogue;
