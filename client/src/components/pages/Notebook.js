import React, { Component, useEffect, useState } from "react";
import { GoogleLogout } from "react-google-login";
import {  Redirect } from "@reach/router";
import { get, post } from "../../utilities.js";
//add delete entry functionality??
import Note from "./Note.js"

import "../../utilities.css";
import "./Notebook.css";
//TODO: handle overflow
const GOOGLE_CLIENT_ID = "417583844892-c3aanl2sookiph3kmgb7cna6f3l459qc.apps.googleusercontent.com";
//TODO stop from adding duplicates or smth as well
const Notebook = ({userId, firstName, handleLogout}) => {
    const [notes, setNotes] = useState([]);
    const [ingredients, setIngredients] = useState(false);//should we actually just access the history and go back or do this??

    if (!userId) {
        console.log("no user id !!!");
        return <Redirect to="/" />;
    }
//NOTE: no longer updates regularly but now the logout button works :face_with_3_hearts:
    //useEffect(() => {
    else {
        console.log(userId);
        get("/api/notes", {
            userid : userId,
        }).then((notelist) => {
            //console.log(notelist);
            setNotes(notelist);
        });
    }

    const toIngredients = (e) => {
        setIngredients(true);
    }

    if (ingredients) {
        return <Redirect to="/ingredients" />
    }

    //}, []);

    //TODO: load data in from somewhere
    return (
        <>
            <div class="wrapper" id="nbwrapper">
                <p id="ntbk" class="impt">{firstName}'s Notebook</p>
                <div id="notes" >
                    <Note notelist={notes} />
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
                        <button onClick={toIngredients}>Back</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notebook;