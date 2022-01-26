import React, { Component, useState, useEffect } from "react";
import "./MomAnimationCSS.css";
import endMusic from "../../../dist/Music/Tea K Pea - lemoncholy.mp3";
import mom1 from "../../../dist/characters/mom1.png";
import mom2 from "../../../dist/characters/mom2.png";
import grave from "../../../dist/characters/grave.png";
import ReactAudioPlayer from "react-audio-player";

const Mom = () => {
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

  return (
    <>
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
      <div className="fadeInOutFourth">
        "Mallet Play" - Maarten Schellekens, from Free Music Archive, CC BY-NC 4.0
      </div>
      <div className="fadeInOutFifth">
        "Beach Ballin'" - Mr.ruiZ, from Free Music Archive, CC BY-NC 4.0
      </div>
      <div className="fadeInOutSixth">
        "On va exister" - M33 Project, from Free Music Archive, CC BY 4.0
      </div>
      <div className="fadeInOutSeventh">
        "Reciclatge" - M33 Project, from Free Music Archive, CC BY 4.0
      </div>
      <div className="fadeInOutEighth">
        "Suspects" - Marcos H. Bolanos, from Free Music Archive, CC BY-NC 4.0
      </div>
      <div className="fadeInOutNinth">
        "Åtminstone" - cryptic scenery, from Free Music Archive, CC BY-NC-SA 4.0
      </div>
      <div className="fadeInOutTenth">
        "lemoncholy" - Tea K Pea, from Free Music Archive, CC BY-NC 4.0
      </div>
      <div className="fadeInOutEleventh">thank you for playing</div>
      {/* <div className="lineBreaksAndFade">
        {`special thanks to\n"Home" - Julian Winter, from Free Music Archive, CC BY-NC-SA 4.0\n"Pal de Pluja" - M33 Project, from Free Music Archive, CC BY 4.0 \n "Mallet Play" - Maarten
        Schellekens, from Free Music Archive, CC BY-NC 4.0\n"Beach Ballin'" - Mr.ruiZ, from Free
        Music Archive, CC BY-NC 4.0\n"On va exister" - M33 Project, from Free Music Archive, CC BY
        4.0\n"Reciclatge" - M33 Project, from Free Music Archive, CC BY 4.0\n"Suspects" - Marcos
        H. Bolanos, from Free Music Archive, CC BY-NC 4.0\n"Åtminstone" - cryptic scenery, from
        Free Music Archive, CC BY-NC-SA 4.0\n"lemoncholy" - Tea K Pea, from Free Music Archive, CC
        BY-NC 4.0\n`}
      </div> */}
      <ReactAudioPlayer src={endMusic} autoPlay loop></ReactAudioPlayer>
    </>
  );
};

export default Mom;
