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


const Pheesh2Dialogue = ({ firstName }) => {
  const [run, setRun] = useState(false);
  const messages = [
    { type: "normal", text: "Nice job kiddo.", nextLine: 1 },
    { type: "normal", text: "...Hm? What's that?", nextLine: 1 },
    {
      type: "normal",
      text: "My house is empty? I'm well aware of this.",
      nextLine: 1,
    },
    {
      type: "normal",
      text: `I just wanted my house to reflect my character - it's as empty as my soul is dark.`,
      nextLine: 1,
    },
    { type: "normal", text: "I'm kidding again obviously. Far too old for that kinda phase.", nextLine: 1 },
    { type: "normal", text: `...No just...it's a pain. I'd help you more but sleep is sounding real nice right about now. `, nextLine: 1 },
    { type: "normal", text: "Hm?", nextLine: 1 },
    { type: "normal", text: "It's already morning? I hadn't noticed. ", nextLine: 1 },
    { type: "normal", text: "...", nextLine: 1 },
    { type: "normal", text: "Please stop crying...", nextLine: 1 },
    { type: "choice", text: "...Are you sure you want to keep going? *Press Y/N*",yes:1, no:4  },
    { type: "normal", text: "...", nextLine: 1 },
    { type: "choice", text: "Are you sure? *Press Y/N*", yes:1, no:2},
    { type: "normal", text: `...Well if you need it I got a fin to lend...in spirit. I'll be seeing you ${firstName}. *Press W to continue*`, nextLine: 3 },
    { type: "normal", text: "...I guess we're stuck here together then...", nextLine: 1},
    { type: "choice", text: "... *Press Y to go back...or don't.*", yes:-3}
  ];

  addEventListener('keyup', ({keyCode}) => {
    switch (keyCode) {
        case 87:
          setRun(true)
          break

        case 83:
            setRun(false)
            break
          
        case 87:
          setRun(true)
          break
    }
   })


  if (run) {
    return <Redirect to="/map" />;
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

export default Pheesh2Dialogue;
