import "./DialogueCSS.css";
import React from "react";
import lotlbackground from "../../../dist/characters/lotl1.png";

const Message = ({ words }) => {
  return <div className="dialogueText">{words}</div>;
};

export default Message;
