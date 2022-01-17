import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import React, { Component } from "react";
import lotlbackground from "../../../dist/characters/lotl1.png";

const messages = ["Hello! My name is Ms. Lotl.", "poggers", "POGGERS", "AHHHHH"];

const ExampleGame = (props) => {
  return (
    <>
      <img src={lotlbackground} class="dialogueBackground"></img>
      <DialogueBox messages={messages}></DialogueBox>
    </>
  );
};

export default ExampleGame;
