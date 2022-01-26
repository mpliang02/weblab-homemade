import React, { useEffect, useState } from "react";
import Message from "./Message.js";
import back from "../../../dist/extras/Untitled_Artwork.png";
//        <img className="dialogueTextBox" src={dialogueTextBox}></img>

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
          if (event.key === "w") {
            if (previousDialogue + messages[previousDialogue].yes <= messages.length - 1)
              return previousDialogue + messages[previousDialogue].yes;
            else {
              return previousDialogue;
            }
          } else if (event.key === "s") {
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
      <div className="dialogueSpeaker">{characterName}</div>
      <textarea
        disabled
        className="dialogueTextBox"
        value={messages[currentDialogue].text}
        name={currentDialogue}
      ></textarea>
      <img className="dialogueBack" src={back}></img>
      <img className="dialogueImage" src={dialogueImage}></img>
    </div>
  );
};

export default DialogueBox;
