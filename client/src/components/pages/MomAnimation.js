import React, { Component, useState, useEffect } from "react";
import "./MomAnimationCSS.css";
import endMusic from "../../../dist/Music/Tea K Pea - lemoncholy.mp3";
import mom1 from "../../../dist/characters/mom1.png";
import mom2 from "../../../dist/characters/mom2.png";
import grave from "../../../dist/characters/grave.png";
import ReactAudioPlayer from "react-audio-player";
import sickMom from "../../../dist/extras/momhead.png";
import DialogueBox from "./MomDialogueTextBox.js";

const Mom = ({ firstName, recipe }) => {
  const [imageNumber, setImageNumber] = useState(0);

  useEffect(() => {
    const timer = () => {
      setImageNumber((prevImageNumber) => 1 - prevImageNumber);
    };
    setInterval(timer, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const imageArray = [mom1, mom2];

  const messages = [
    { type: "normal", text: `Oh, hello ${firstName}!`, nextLine: 1 },
    {
      type: "normal",
      text: `You made ${recipe} for me? Thank you!`,
      nextLine: 1,
    },
    { type: "normal", text: `${firstName}...remember...I love you!`, nextLine: 1 },
  ];

  return (
    <>
      {/* <DialogueBox messages={messages} characterName={"Mom"} dialogueImage={sickMom}></DialogueBox> */}
      <img className="fadeInOut" src={imageArray[imageNumber]}></img>
      <img className="fadeInTransition" src={grave}></img>
      <div className="fadeInOutFirst">special thanks to:</div>
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode"
        className="fadeInOutSecond"
      >
        "Home" - Julian Winter, from Free Music Archive, CC BY-NC-SA 4.0
      </a>
      <a href="https://creativecommons.org/licenses/by/4.0/legalcode" className="fadeInOutThird">
        "Pal de Pluja" - M33 Project, from Free Music Archive, CC BY 4.0
      </a>
      <a
        href="https://creativecommons.org/licenses/by-nc/4.0/legalcode"
        className="fadeInOutFourth"
      >
        "Mallet Play" - Maarten Schellekens, from Free Music Archive, CC BY-NC 4.0
      </a>
      <a href="https://creativecommons.org/licenses/by-nc/4.0/legalcode" className="fadeInOutFifth">
        "Beach Ballin'" - Mr.ruiZ, from Free Music Archive, CC BY-NC 4.0
      </a>
      <a href="https://creativecommons.org/licenses/by/4.0/legalcode" className="fadeInOutSixth">
        "On va exister" - M33 Project, from Free Music Archive, CC BY 4.0
      </a>
      <a href="https://creativecommons.org/licenses/by/4.0/legalcode" className="fadeInOutSeventh">
        "Reciclatge" - M33 Project, from Free Music Archive, CC BY 4.0
      </a>
      <a
        href="https://creativecommons.org/licenses/by-nc/4.0/legalcode"
        className="fadeInOutEighth"
      >
        "Suspects" - Marcos H. Bolanos, from Free Music Archive, CC BY-NC 4.0
      </a>
      <a
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode"
        className="fadeInOutNinth"
      >
        "Åtminstone" - cryptic scenery, from Free Music Archive, CC BY-NC-SA 4.0
      </a>
      <a href="https://creativecommons.org/licenses/by-nc/4.0/legalcode" className="fadeInOutTenth">
        "lemoncholy" - Tea K Pea, from Free Music Archive, CC BY-NC 4.0
      </a>
      <div className="fadeInOutEleventh">thank you for playing</div>
      <ReactAudioPlayer src={endMusic} autoPlay loop></ReactAudioPlayer>
    </>
  );
};

export default Mom;
