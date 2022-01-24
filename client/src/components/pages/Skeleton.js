import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Title from "./Title.js";
//import  { Redirect, useHistory } from 'react-router-dom';
// import {browserHistory} from 'react-router'
import { Redirect } from "@reach/router";

import "./homepage css.css";

import "../../utilities.css";
import "./Skeleton.css";

const GOOGLE_CLIENT_ID = "417583844892-c3aanl2sookiph3kmgb7cna6f3l459qc.apps.googleusercontent.com";
//TODO separate out this skeleton stuff into different files
//<img src="/homemade.png" id="homemade" alt="homemade"></img>
//

const Skeleton = ({ userId, name, handleLogin, handleLogout }) => {
  //const [login, setLogin] = useState(false);

  if (userId) {
    //alert("hi");
    
    return <Redirect to="/ingredients/"/>
    
    //return browserHistory.push('/ingredients');
  }

  return (
    <>
      <div id="welcome">
        {name ? (
          <p>
            you are currently logged in as <span>{name}</span>.
          </p>
        ) : (
          <p>you are not logged in.</p>
        )}

        {/* not routing within react */}
        <a href="/running-game">Go to running game</a>
        <a href="/lotl-dialogue">Go to Ms. Lotl's dialogue</a>
        <a href="/tiger-dialogue">Go to Mr. Tiger's dialogue</a>
        <a href="/margain-dialogue">Go to Mr. Margain's dialogue</a>
        <a href="/pheesh-dialogue">Go to Mr. Pheesh's dialogue</a>
        <a href="/emptyhouse-dialogue">Go to empty house dialogue</a>
        {/* <a href = "/run">Go to running game</a> */}
      </div>
      <div id="homepage">
        <Title />
        <div id="googlelogin">
          {userId ? (
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
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <button
                  class="buttonPosition"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img src="/googlelogo.png"></img>&nbsp;&nbsp;login&nbsp;<span>w/ Google</span>
                </button>
              )}
              buttonText="Login"
              onSuccess={handleLogin}
              onFailure={(err) => console.log(err)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Skeleton;
