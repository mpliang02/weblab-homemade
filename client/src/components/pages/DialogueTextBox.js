import React from "react";
import { useState } from "react";
import Message from "./Message.js";
import lotlhead1 from "../../../dist/extras/lotlhead1.png";

import "./DialogueCSS.css";

const DialogueBox = ({ messages }) => {
  const [currentDialogue, setCurrentDialogue] = useState(0);
  const handleClick = () => {
    if (currentDialogue < messages.length - 1) {
      setCurrentDialogue(currentDialogue + 1);
    } else {
      setCurrentDialogue(0);
    }
  };
  return (
    <div className="dialogueTextBox">
      <div className="dialogueSpeaker">Ms. Lotl</div>
      <Message words={messages[currentDialogue]} key={currentDialogue} />
      <img className="dialogueImage" src={lotlhead1}></img>
      <button onClick={handleClick} className="dialogueEnder">
        OK
      </button>
    </div>
  );
};

export default DialogueBox;
