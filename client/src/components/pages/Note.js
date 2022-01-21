import React, { Component, useEffect, useState } from "react";

const Note = ({notelist}) => {
    //console.log(notelist);
    return (
    <>
        {notelist.map(note => (
            <>
                <p><span class="impt">Recipe:</span> {note.recipeName}</p>
                <p class="impt">Ingredients:</p>
                <ul>
                    <li>{note.ings[0]}</li>
                    <li>{note.ings[1]}</li>
                    <li>{note.ings[2]}</li>
                    <li>{note.ings[3]}</li>
                    <li>{note.ings[4]}</li>
                </ul>
            </>
        ))}
    </>
    );
};

export default Note;