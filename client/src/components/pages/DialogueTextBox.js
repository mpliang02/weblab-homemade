import React, { useEffect } from "react";
import { useState } from "react";
import Message from "./Message.js";

import "./DialogueCSS.css";

const DialogueBox = ({ messages, characterName, dialogueImage }) => {
  const [currentDialogue, setCurrentDialogue] = useState(0);
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      setCurrentDialogue((previousDialogue) => {
        if (messages[previousDialogue].type === "normal") {
          if (event.key === "Enter") {
            if (previousDialogue + messages[previousDialogue].nextLine < messages.length - 1)
              return previousDialogue + messages[previousDialogue].nextLine;
            else {
              return previousDialogue;
            }
          }
        } else {
          if (event.key === "ArrowUp") {
            if (previousDialogue + messages[previousDialogue].yes < messages.length - 1)
              return previousDialogue + messages[previousDialogue].yes;
            else {
              return previousDialogue;
            }
          } else if (event.key === "ArrowDown") {
            if (previousDialogue + messages[previousDialogue].no < messages.length)
              return previousDialogue + messages[previousDialogue].no;
          }
        }
        return previousDialogue;
      });
    });
  }, []);

  return (
    <div className="dialogueTextBox">
      <div className="dialogueSpeaker">{characterName}</div>
      <Message words={messages[currentDialogue].text} key={currentDialogue} />
      <img className="dialogueImage" src={dialogueImage}></img>
    </div>
  );
};

export default DialogueBox;
