import React, { Component, useState } from "react";
import {  Redirect } from "@reach/router";

import "../../utilities.css";
import "./Game.css";
//{ing1, ing2, ing3, ing4, ing5}
const Game = (props) => {
    //let [ing1, setIng1] = useState(props.location.state.ing1 ? props.location.state.ing1 : '');
    const [ing1, setIng1] = useState(props.ing1 ? props.ing1 : '');
    const [ing2, setIng2] = useState(props.ing2 ? props.ing2 : '');
    const [ing3, setIng3] = useState(props.ing3 ? props.ing3 : '');
    const [ing4, setIng4] = useState(props.ing4 ? props.ing4 : '');
    const [ing5, setIng5] = useState(props.ing5 ? props.ing5 : '');
    const [recipeName, setRecipeName] = useState(props.recipeName ? props.recipeName : '');
    //TODO: handle if one of these doesn't exist
    return (
        <>
            <div id="gamewrapper">
                <p>your ingredients are:</p>
                <p>{ing1}</p>
                <p>{ing2}</p>
                <p>{ing3}</p>
                <p>{ing4}</p>
                <p>{ing5}</p>
                <p>this makes the recipe:</p>
                <p>{recipeName}</p>
            </div>
        </>
    );
}

export default Game;