import React, { Component, useEffect, useState } from "react";

const Note = ({notelist}) => {
    //console.log(notelist);
    return (
    <>
        {notelist.map(note => (
            <p>Ingredients: {note.ings[0]}, {note.ings[1]}, {note.ings[2]}, {note.ings[3]}, {note.ings[4]}; Recipe: {note.recipeName}</p>
        ))}
    </>
    );
};

export default Note;