import { URLSearchParams } from "core-js/modules/web.url-search-params";
import React, { useEffect } from "react";
import sky from "./assets/sky1.png";
import init from "./run.js";

const Run = (props) => {

    useEffect(() => {
        init();
    }, []);

   

    return (
        <div className = "runBack">
            <div className="Game-body"   >
                <canvas id="game-canvas" width="800" height="800" />
                
            </div>
        </div>
    );

};

export default Run;