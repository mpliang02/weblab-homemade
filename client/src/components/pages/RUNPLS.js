import { URLSearchParams } from "core-js/modules/web.url-search-params";
import React, { useEffect } from "react";
import sky from "./assets/sky1.png";
import init from "./run.js";
import gameMusic from "../../../dist/Music/Mr.ruiZ - Beach Ballin'.mp3";
import ReactAudioPlayer from "react-audio-player";

const Run = (props) => {
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="runBack">
      <ReactAudioPlayer src={gameMusic} autoPlay loop></ReactAudioPlayer>
      <div className="Game-body">
        <canvas id="game-canvas" width="800" height="800" />
      </div>
    </div>
  );
};

export default Run;
