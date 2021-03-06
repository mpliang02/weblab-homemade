import React, { Component, useState, useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import { Redirect } from "@reach/router";
import { get, post } from "../../utilities.js";

import "../../utilities.css";
import "./Instructions.css";

const GOOGLE_CLIENT_ID = "417583844892-c3aanl2sookiph3kmgb7cna6f3l459qc.apps.googleusercontent.com";
//ref="fdjisofdjs" onSubmit="fjdisofds"
const Instructions = ({ handleLogout }) => {
  const [ing, setIng] = useState(false);

  const toIngredients = (e) => {
    setIng(true);
  };

  if (ing) {
    return <Redirect to="/ingredients" />;
  }

  return (
    <>
      <div class="wrapper" id="instwrapper">
        <div id="contwrapper">
          <div id="instwrap">
            <p id="inst">Instructions</p>
          </div>
          <p class="sect"> DIALOGUE: </p>
          <p class="cont">
            {" "}
            Enter to proceed <br /> Y for YES <br /> N for NO{" "}
          </p>
          <p class="sect"> RUNNER: </p>
          <p class="cont"> Arrow keys + space bar </p>
          <p class="cont">
            {" "}
            When knocking, please wait at the door for a bit as the village may take a while! (Press
            Y to end interactions){" "}
          </p>
        </div>
        <div class="buttonside">
          <div>
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <img src="/googlelogo.png"></img>&nbsp;&nbsp;logout
                </button>
              )}
              buttonText="Logout"
              onLogoutSuccess={handleLogout}
              onFailure={(err) => console.log(err)}
            />
          </div>
          <div>
            <button id="ingbtn" onClick={toIngredients}>
              back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructions;
