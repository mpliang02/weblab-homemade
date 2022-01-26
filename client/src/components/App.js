import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
// import  { browserHistory } from 'react-router'

import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import Ingredients from "./pages/Ingredients.js";
import Game from "./pages/Game.js";
import Notebook from "./pages/Notebook.js";
import FroggyDialogue from "./pages/FroggyDialogue.js";
import LotlDialogue from "./pages/LotlDialogue.js";
import TigerDialogue from "./pages/TigerDialogue.js";
import MargainDialogue from "./pages/MargainDialogue.js";
import PheeshDialogue from "./pages/PheeshDialogue.js";
import EmptyHouseDialogue from "./pages/EmptyHouseDialogue.js";
import RunLotl from "./pages/runLotl.js";
import RunTiger from "./pages/runTiger.js";
import RunMargain from "./pages/runMargain.js";
import RunPheesh from "./pages/runPheesh.js";
import Map from "./pages/map.js";
import Instructions from "./pages/Instructions.js";
//import APITest from "./pages/APITest.js";
// import RunningGame from "./pages/running game/RunningGame.js";
import MomAnimation from "./pages/MomAnimation.js";
import Lotl2Dialogue from "./pages/Lotl2.js";
import Tiger2Dialogue from "./pages/Tiger2.js";
import Margain2Dialogue from "./pages/Margain2.js";
import Pheesh2Dialogue from "./pages/Pheesh2.js";


import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */

const App = () => {
  const [userId, setUserId] = useState(undefined);
  const [name, setName] = useState(undefined);
  const [firstName, setFirstName] = useState(undefined);
  const [ings, setIngs] = useState(undefined);
  const [recipe, setRecipe] = useState(undefined);
  //const [userInfo, setUserInfo] = useState(undefined);

  useEffect(() => {
    console.log("jfiodsjfoidsijfdsoijfds");
    get("/api/whoami").then((user) => {
      console.log(user);
      if (user._id) {
        // they are registed in the database, and currently logged in.
        setUserId(user._id);
        setName(user.name);
        setFirstName(user.givenName);
        //setUserInfo(user);
        //console.log(user);
        //console.log(user.name);
        //console.log(name);
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
      setFirstName(user.givenName);

      console.log("fjdsiofijsdo");
      console.log(user);
      //setUserInfo(user);
      post("/api/initsocket", { socketid: socket.id });
    });
    //toIngredients();
  };

  const handleLogout = () => {
    setUserId(undefined);
    setName(undefined);
    setFirstName(undefined);
    //setUserInfo(undefined);
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
        <Ingredients
          path="/ingredients"
          userId={userId}
          handleLogout={handleLogout}
          setIngs={setIngs}
          setRecipe={setRecipe}
        />
        <Game
          // path="/game/:ing1/:ing2/:ing3/:ing4/:ing5/:recipeName"
          path="/game"
          ings={ings}
          recipe={recipe}
          userId={userId}
          handleLogout={handleLogout}
        />
        <Notebook
          path="/notebook"
          userId={userId}
          firstName={firstName}
          handleLogout={handleLogout}
        />
        <FroggyDialogue path="/welcome" firstName={firstName} recipe={recipe}></FroggyDialogue>
        <LotlDialogue path="/lotl-dialogue" firstName={firstName} recipe={recipe} />
        <TigerDialogue path="/tiger-dialogue" firstName={firstName} recipe={recipe} />
        <MargainDialogue path="/margain-dialogue" firstName={firstName} recipe={recipe} />
        <PheeshDialogue path="/pheesh-dialogue" firstName={firstName} recipe={recipe} />
        <EmptyHouseDialogue path="/emptyhouse-dialogue" />
        <Instructions path="/instructions" handleLogout={handleLogout} />
        {/* <APITest path="/apitest" /> */}
        <RunLotl path="/runLotl" />
        <RunTiger path="/runTiger" />
        <RunMargain path="/runMargain" />
        <RunPheesh path="/runPheesh" />
        <Map path = "/map" /> 
        <Lotl2Dialogue path = "/lotl2" /> 
        <Tiger2Dialogue path = "/tiger2" /> 
        <Margain2Dialogue path = "/margain2" /> 
        <Pheesh2Dialogue path = "/pheesh2" /> 
        {/* <RunningGame path="/running-game" /> */}
        <MomAnimation path="/end" className="fadeOutTransition"></MomAnimation>
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
