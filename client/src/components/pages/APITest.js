import React, { Component, useState, useEffect} from "react";
import { GoogleLogout } from "react-google-login";
import { Redirect } from "@reach/router";
import { get, post } from "../../utilities.js";

import "../../utilities.css";

const GOOGLE_CLIENT_ID = "417583844892-c3aanl2sookiph3kmgb7cna6f3l459qc.apps.googleusercontent.com";
//ref="fdjisofdjs" onSubmit="fjdisofds"
const APITest = ({ userId, firstName, handleLogout, setIngs, setRecipe }) => {
    const [ing1, setIng1] = useState("");
    
//   componentDidMount(() => {
//     // get all entities - GET
//   });

//   create((e) => {
//     // add entity - POST
//     e.preventDefault();
//   });

//   update((e) => {
//     // update entity - PUT
//     e.preventDefault();
//   });
  
//   delete((e) =>{
//     // delete entity - DELETE
//     e.preventDefault();
//   }
//   handleChange(changeObject) {
//     setState(changeObject)
//   }

    const testAPI = () => {
        fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=scallions%2Cwater%2Coil%2Csalt%2Cflour&number=5&ignorePantry=false&ranking=1", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "8dc60b8972msh9ed1cbe3fa19685p179872jsn68a02d450704"
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            console.log("fdjiofsdoij");
            console.log(response[0]["title"]);
            /*response.data.map(item => {
                console.log(item);
                console.log(item.title);
            });
            /*alert(JSON.parse(response));
            alert(response[0]);
            alert(response[0]["name"]);
            alert(JSON.parse(response[0]["name"]));
            alert(response);*/
        })
        .catch(err => {
            console.error(err);
        });
    }

    return (
        <>
            <button onClick={testAPI}>dumb</button>
        </>
    );
};

export default APITest;
