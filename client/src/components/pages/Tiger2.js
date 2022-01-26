import DialogueBox from "./TigerDialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component, useState } from "react";
// import tigerbackground from "../../../dist/characters/tiger1.png";
import TigerDialogueBackground from "./TigerDialogueBackground.js";
import tigerhead1 from "../../../dist/extras/tigerhead1.png";
import instructionsBox from "../../../dist/extras/Untitled_Artwork.png";
import ReactAudioPlayer from "react-audio-player";
import tigerMusic from "../../../dist/Music/M33 Project - On va exister.mp3";
import { Redirect } from "@reach/router";


const Tiger2Dialogue = ({ firstName }) => {
  const [run, setRun] = useState(false);
  const messages = [
    { type: "normal", text: "Let me go find what you need. It's a bit hectic around here...", nextLine: 1 },
    {
      type: "normal",
      text: "Oh! I'd rather you didn't touch tha- *crash*",
      nextLine: 1,
    },
    {
      type: "normal",
      text: `...`,
      nextLine: 1,
    },
    { type: "normal", text: "Breathe. Ground yourself. Inhale 5 counts and exhale 5.", nextLine: 1 },
    {
      type: "normal",
      text: "Hey, hey…it's fine. Don't worry about it.",
      nextLine: 1,
    },
    {
      type: "normal",
      text: "A single broken plate isn't going to harm anybody. Plus, I've always got more plates if you need them.",
      nextLine: 1,
    },
    {
      type: "normal",
      text: "Just remember to breathe afterwards. Your face is as red as my house right now heh.",
      nextLine: 1,
    },
    { type: "choice", text: `Anyways, off you go - Mr.Tigathon's coming home today and the tea isn't going to finish itself, is it ${firstName}?`, yes: 1, no: 2 },
    
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
      <ReactAudioPlayer src={tigerMusic} autoPlay loop></ReactAudioPlayer>
      <TigerDialogueBackground></TigerDialogueBackground>
      <DialogueBox
        messages={messages}
        characterName={"Mr. Tiger"}
        dialogueImage={tigerhead1}
      ></DialogueBox>
      <img className="InstructionsBox" src={instructionsBox}></img>
      <div className="InstructionsText">'Enter' to continue, 'w' for YES, 's' for NO</div>
    </>
  );
};

export default Tiger2Dialogue;
