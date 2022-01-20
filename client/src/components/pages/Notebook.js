import React, { Component, useEffect, useState } from "react";
import { GoogleLogout } from "react-google-login";
import {  Redirect } from "@reach/router";
import { get } from "../../utilities.js";
//add delete entry functionality??
import Note from "./Note.js"

import "../../utilities.css";
import "./Notebook.css";

const Notebook = ({userId}) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        console.log(userId);
        get("/api/notes", {
            userid : userId,
        }).then((notelist) => {
            //console.log(notelist);
            setNotes(notelist);
        });
    });

    //TODO: load data in from somewhere
    return (
        <>
            <div>
                <p>Notebook</p>
                <Note notelist={notes} />
            </div>
        </>
    );
};

export default Notebook;