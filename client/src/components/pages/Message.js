import "./DialogueCSS.css";
import React from "react";

const Message = ({ words }) => {
  return <div className="dialogueText">{words}</div>;
};

export default Message;
