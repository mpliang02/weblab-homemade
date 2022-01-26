import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component, useState } from "react";
// import margainbackground from "../../../dist/characters/margain1.png";
import MargainDialogueBackground from "./MargainDialogueBackground.js";
import margainhead1 from "../../../dist/extras/margainhead1.png";
import instructionsBox from "../../../dist/extras/Untitled_Artwork.png";
import ReactAudioPlayer from "react-audio-player";
import margainMusic from "../../../dist/Music/M33 Project - Reciclatge.mp3";
import { Redirect } from "@reach/router";


const Margain2Dialogue = ({ firstName, ings }) => {
  const [run, setRun] = useState(false);
  const messages = [
    { type: "normal", text: `Here, take this ${ings[2]}...it's the last I have of it...`, nextLine: 1 },
    {
      type: "normal",
      text: " I-if you use it well it'll probably hopefully h-help her...",
      nextLine: 1,
    },
    {
        type: "normal",
        text: "Y-yeah I definitely think so...",
        nextLine: 1,
      },
      {
        type: "normal",
        text: "All things are weighed equal in this w-world…it gives and it t-takes",
        nextLine: 1,
      }, 
      {
        type: "normal",
        text: "...so if w-we give more I'm sure it'll take less. Even the universe has a conscience...I-i think...",
        nextLine: 1,
      }, 
    {
      type: "choice",
      text: "...P-please leave... *Press Y*",
      yes: 1,
      no: 2,
    }];
  
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
      <ReactAudioPlayer src={margainMusic} autoPlay loop></ReactAudioPlayer>
      <MargainDialogueBackground></MargainDialogueBackground>
      <DialogueBox
        messages={messages}
        characterName={"Mr. Margain"}
        dialogueImage={margainhead1}
      ></DialogueBox>
      <img className="InstructionsBox" src={instructionsBox}></img>
      <div className="InstructionsText">'Enter' to continue, 'w' for YES, 's' for NO</div>
    </>
  );
};

export default Margain2Dialogue;
