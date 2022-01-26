import React, { useEffect } from "react";
import { useState } from "react";
import Message from "./Message.js";
import dialogueTextBox from "../../../dist/extras/Untitled_Artwork.png";
import blankBox from "../../../dist/extras/box1.png";
import back from "../../../dist/extras/Untitled_Artwork.png";

import "./DialogueCSS.css";

const DialogueBox = ({ messages, characterName, dialogueImage }) => {
  const [currentDialogue, setCurrentDialogue] = useState(0);
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      setCurrentDialogue((previousDialogue) => {
        if (messages[previousDialogue].type === "normal") {
          if (event.key === "Enter") {
            if (previousDialogue + messages[previousDialogue].nextLine <= messages.length - 1)
              return previousDialogue + messages[previousDialogue].nextLine;
            else {
              return previousDialogue;
            }
          }
        } else {
          if (event.key === "ArrowUp") {
            if (previousDialogue + messages[previousDialogue].yes <= messages.length - 1)
              return previousDialogue + messages[previousDialogue].yes;
            else {
              return previousDialogue;
            }
          } else if (event.key === "ArrowDown") {
            if (previousDialogue + messages[previousDialogue].no <= messages.length)
              return previousDialogue + messages[previousDialogue].no;
          }
        }
        return previousDialogue;
      });
    });
  }, []);

  return (
    <div>
      <img className="frogBox" src={blankBox}></img>
      <div className="dialogueSpeaker">{characterName}</div>
      <img className="dialogueBack" src={back}></img>
      <textarea
        disabled
        className="dialogueTextBox"
        value={messages[currentDialogue].text}
        name={currentDialogue}
      ></textarea>

      <img className="froggyImage" src={dialogueImage}></img>
    </div>
  );
};

export default DialogueBox;
