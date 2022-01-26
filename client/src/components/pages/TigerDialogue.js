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


const TigerDialogue = ({ firstName }) => {
  const [run, setRun] = useState(false);
  const messages = [
    { type: "normal", text: "Howdy there! I'm Mr. Tiger.", nextLine: 1 },
    {
      type: "normal",
      text: "Ah I see…you're her child. Well nice to meet you dear. Sorry for the ruckus - you know how appliances are.",
      nextLine: 1,
    },
    {
      type: "normal",
      text: `I heard from Ms. Lotl that you're cooking for your mom.`,
      nextLine: 1,
    },
    { type: "normal", text: "...I think that's sweet.", nextLine: 1 },
    {
      type: "normal",
      text: "Aha did Ms.Lotl tell you about me? Yes yes she's quite sweet - though sometimes it's as if her head's filled with nothing but rainbows.",
      nextLine: 1,
    },
    { type: "choice", text: `"Mmm so you have the first ingredient. I have another if you need it...", ${firstName}?`, yes: 1, no: 2 },
    { type: "normal", text: "Off you go!", nextLine: 2 },
    { type: "normal", text: "Hey, you can't do that.", nextLine: -2 },
  ];

  addEventListener('keyup', ({keyCode}) => {
    switch (keyCode) {
        case 87:
          setRun(true)
          break

        case 40:
            setRun(false)
            break
          
        case 87:
          setRun(true)
          break
    }
   })


  if (run) {
    return <Redirect to="/run" />;
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

export default TigerDialogue;
