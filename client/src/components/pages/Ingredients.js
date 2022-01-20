import React, { Component, useState } from "react";
import { GoogleLogout } from "react-google-login";
import {  Redirect } from "@reach/router";
import {Notebook} from "./Notebook.js";

import "../../utilities.css";
import "./Ingredients.css";

const GOOGLE_CLIENT_ID = "417583844892-c3aanl2sookiph3kmgb7cna6f3l459qc.apps.googleusercontent.com";
//ref="fdjisofdjs" onSubmit="fjdisofds"
const Ingredients = ({userId, firstName, handleLogout}) => {
    const [ing1, setIng1] = useState('');
    const [ing2, setIng2] = useState('');
    const [ing3, setIng3] = useState('');
    const [ing4, setIng4] = useState('');
    const [ing5, setIng5] = useState('');
    const [sub, setSub] = useState(false);

    const handleIng1Change = (e) => {
        setIng1(e.target.value);
    };
    const handleIng2Change = (e) => {
        setIng2(e.target.value);
    };
    const handleIng3Change = (e) => {
        setIng3(e.target.value);
    };
    const handleIng4Change = (e) => {
        setIng4(e.target.value);
    };
    const handleIng5Change = (e) => {
        setIng5(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert(firstName);
        //alert(`your ingredients are: ${ing1} and ${ing2} and ${ing3} and ${ing4} and ${ing5} and thats it lolz `);
        //return <Redirect to={{ pathname: '/game', state: {ing1:  ing1 , ing2: ing2, ing3: ing3, ing4: ing4, ing5: ing5}}} />
        //return <Redirect to='/game' />
        //alert("hi bestie")
        //TODO: add to notebook
        setSub(true);
    };

    if (!userId) {
        return <Redirect to="/" />
    }

    if (sub) {
        //return <Redirect to={{ pathname: '/game', ing1:  {ing1} , ing2: {ing2}, ing3: {ing3}, ing4: {ing4}, ing5: {ing5}}} />
        //return <Redirect to='/game' />
        //return <Redirect to={{ pathname: '/game', state: {ing1:  ing1 , ing2: ing2, ing3: ing3, ing4: ing4, ing5: ing5}}} />
        return <Redirect to={`/game/${ing1}/${ing2}/${ing3}/${ing4}/${ing5}`} />
    }

    const accessNotebook = (e) => {
        return <Redirect to="/notebook" />
    }

    return (
        <>
            <div id="wrapper">
                <div id="recipes">
                    <form id="ingredient-list" onSubmit={handleSubmit}>
                        <div class="ingredient">
                            <input type="text" name="ing1" onChange={handleIng1Change} value={ing1} placeholder="ingredient 1" />
                        </div>
                        <div class="ingredient">
                            <input type="text" name="ing2" onChange={handleIng2Change} value={ing2} placeholder="ingredient 2" />
                        </div>
                        <div class="ingredient">
                            <input type="text" name="ing3" onChange={handleIng3Change} value={ing3} placeholder="ingredient 3" />
                        </div>
                        <div class="ingredient">
                            <input type="text" name="ing4" onChange={handleIng4Change} value={ing4} placeholder="ingredient 4" />
                        </div>
                        <div class="ingredient">
                            <input type="text" name="ing5" onChange={handleIng5Change} value={ing5} placeholder="ingredient 5" />
                        </div>
                        <div id="submitbtn" >
                            <button type="submit">submit</button>
                        </div>
                    </form>
                </div>
                <div id="logoutdiv" >
                    <GoogleLogout
                        clientId={GOOGLE_CLIENT_ID}
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled}><img src="/googlelogo.png"></img>&nbsp;&nbsp;logout</button>
                        )}
                        buttonText="Logout"
                        onLogoutSuccess={handleLogout}
                        onFailure={(err) => console.log(err)}
                    />
                    <button id="notebookbtn" onClick={accessNotebook}>Notebook</button>
                </div>
            </div>
        </>
    );
};

export default Ingredients;