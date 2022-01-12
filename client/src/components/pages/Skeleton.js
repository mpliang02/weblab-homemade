import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import Title from "./Title.js"

import "../../utilities.css";
import "./Skeleton.css";

const GOOGLE_CLIENT_ID = "417583844892-c3aanl2sookiph3kmgb7cna6f3l459qc.apps.googleusercontent.com";
//TODO separate out this skeleton stuff into different files
//<img src="/homemade.png" id="homemade" alt="homemade"></img>
//
const Skeleton = ({ userId, name, handleLogin, handleLogout }) => {
  return (
    <>
      <div id="welcome">
        {name ? (
          <p>you are currently logged in as <span>{name}</span>.</p>
        ) : (
          <p>you are not logged in.</p>
        )}
      </div>
      <div id="homepage">
        <Title />
        <div id="googlelogin" >
          {userId ? (
            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}><img src="/googlelogo.png"></img>&nbsp;&nbsp;logout</button>
              )}          
              buttonText="Logout"
              onLogoutSuccess={handleLogout}
              onFailure={(err) => console.log(err)}
            />
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled}><img src="/googlelogo.png"></img>&nbsp;&nbsp;login&nbsp;<span>w/ Google</span></button>
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
