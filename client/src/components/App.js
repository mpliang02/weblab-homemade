import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import LotlDialogue from "./pages/LotlDialogue.js";
import TigerDialogue from "./pages/TigerDialogue.js";
import MargainDialogue from "./pages/MargainDialogue.js";
import PheeshDialogue from "./pages/PheeshDialogue.js";
import EmptyHouseDialogue from "./pages/EmptyHouseDialogue.js";

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

  const handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      setUserId(user._id);
      setName(user.name);
      post("/api/initsocket", { socketid: socket.id });
    });
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
        <LotlDialogue path="/lotl-dialogue" />
        <TigerDialogue path="/tiger-dialogue" />
        <MargainDialogue path="/margain-dialogue" />
        <PheeshDialogue path="/pheesh-dialogue" />
        <EmptyHouseDialogue path="/emptyhouse-dialogue" />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
