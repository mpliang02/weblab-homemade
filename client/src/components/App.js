import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
// import  { browserHistory } from 'react-router'

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Ingredients from "./pages/Ingredients.js";
import Game from "./pages/Game.js";
import LotlDialogue from "./pages/LotlDialogue.js";
import TigerDialogue from "./pages/TigerDialogue.js";
import MargainDialogue from "./pages/MargainDialogue.js";
import PheeshDialogue from "./pages/PheeshDialogue.js";
import EmptyHouseDialogue from "./pages/EmptyHouseDialogue.js";
// import RunningGame from "./pages/running game/RunningGame.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [name, setName] = useState(undefined);

  useEffect(() => {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
        setName(user._name);
      }
    });
  }, []);

  /*const toIngredients = () => {
    let path = `/ingredients`;
    history.push(path);
    alert("hi");
  };*/

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      setName(user.name);
      post("/api/initsocket", { socketid: socket.id });
    });
    //toIngredients();
  };

  const handleLogout = () => {
    setUserId(undefined);
    setName(undefined);
    post("/api/logout");
  };

  return (
    <>
      <Router>
        <Skeleton
          path="/"
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          userId={userId}
          name={name}
        />
        <Ingredients path="/ingredients" userId={userId} handleLogout={handleLogout} />
        <Game
          path="/game/:ing1/:ing2/:ing3/:ing4/:ing5"
          userId={userId}
          handleLogout={handleLogout}
        />
        <LotlDialogue path="/lotl-dialogue" />
        <TigerDialogue path="/tiger-dialogue" />
        <MargainDialogue path="/margain-dialogue" />
        <PheeshDialogue path="/pheesh-dialogue" />
        <EmptyHouseDialogue path="/emptyhouse-dialogue" />
        {/* <RunningGame path="/running-game" /> */}
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
