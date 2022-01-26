import React, { Component, useState, useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import { Redirect } from "@reach/router";
import { Notebook } from "./Notebook.js";
import { get, post } from "../../utilities.js";

import "../../utilities.css";
import "./Ingredients.css";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const GOOGLE_CLIENT_ID = "417583844892-c3aanl2sookiph3kmgb7cna6f3l459qc.apps.googleusercontent.com";
//ref="fdjisofdjs" onSubmit="fjdisofds"
const Ingredients = ({ userId, firstName, handleLogout, setIngs, setRecipe }) => {
  const [ing1, setIng1] = useState("");
  const [ing2, setIng2] = useState("");
  const [ing3, setIng3] = useState("");
  const [ing4, setIng4] = useState("");
  const [ing5, setIng5] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [sub, setSub] = useState(false);
  const [notebook, setNotebook] = useState(false);
  const [inst, setInst] = useState(false);
  const [good, setGood] = useState(true);

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
    console.log("about to call api");
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${ing1}%2C${ing2}%2C${ing3}%2C${ing4}%2C${ing5}&number=5&ignorePantry=false&ranking=1`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          "x-rapidapi-key": "8dc60b8972msh9ed1cbe3fa19685p179872jsn68a02d450704",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log(response[0]["title"]);
        if (response.keys().length == 0) {
          alert("no valid recipe! try again"); //TODO: add check that uses all our ingredients
        } else {
          //TODO: allow recipe choice selection
          setRecipeName(response[0]["title"]);
          setIngs([ing1, ing2, ing3, ing4, ing5]);
          setSub(true);
          post("/api/newnote", {
            userid: userId,
            ings: [ing1, ing2, ing3, ing4, ing5],
            recipeName: response[0]["title"],
          }).then((note) => {
            console.log(note);
          });
        }
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
      .catch((err) => {
        console.error(err);
        alert("error! try again");
      });
    /*get("/api/recipes").then((recipeObjs) => {
      console.log("api called");
      //console.log(recipeObjs);
      const dish = matchRecipe(recipeObjs);
      if (dish !== null) {
        console.log("success", dish);
        setRecipeName(dish);
        setSub(true);
        post("/api/newnote", {
          userid: userId,
          ings: [ing1, ing2, ing3, ing4, ing5],
          recipeName: dish,
        }).then((note) => {
          console.log(note);
        });
      } else {
        console.log("invalid", dish);
        alert("invalid dish!  try again");
      }
    });*/
    //alert(firstName);
    //alert(`your ingredients are: ${ing1} and ${ing2} and ${ing3} and ${ing4} and ${ing5} and thats it lolz `);
    //return <Redirect to={{ pathname: '/game', state: {ing1:  ing1 , ing2: ing2, ing3: ing3, ing4: ing4, ing5: ing5}}} />
    //return <Redirect to='/game' />
    //alert("hi bestie")
    //TODO: add to notebook
    //setSub(true);
  };

  const matchRecipe = (recipeObjs) => {
    // look at objects and check
    // let ingredientsList = recipeObjs.ingredients;
    // let userList = [`${ing1}`, `${ing2}`, `${ing3}`, `${ing4}`, `${ing5}`];
    // let matchedRecipes = ingredientsList.filter((recipe) => recipe.includes(userList));
    // if (matchedRecipes.length > 0) {
    //   console.log("valid");
    // } else {
    //   console.log("false");
    // }
    const userIngredients = [`${ing1}`, `${ing2}`, `${ing3}`, `${ing4}`, `${ing5}`];
    console.log(userIngredients);
    for (const recipe of recipeObjs) {
      let counter = 0;
      const ingredients = recipe.ingredients;
      for (const ing of ingredients) {
        if (userIngredients.includes(ing)) {
          counter++;
        }
      }
      if (counter === 5) {
        return recipe.dishName;
      }
    }
    return null;
  };

  if (!userId) {
    return <Redirect to="/" />;
  }

  if (sub) {
    setIngs([ing1, ing2, ing3, ing4, ing5]);
    setRecipe(recipeName); //TODO: consolidate recipe name functions??
    console.log(recipeName);
    console.log("fjdiosoijfds");
    //return <Redirect to={{ pathname: '/game', ing1:  {ing1} , ing2: {ing2}, ing3: {ing3}, ing4: {ing4}, ing5: {ing5}}} />
    //return <Redirect to='/game' />
    //return <Redirect to={{ pathname: '/game', state: {ing1:  ing1 , ing2: ing2, ing3: ing3, ing4: ing4, ing5: ing5}}} />
    //return <Redirect to={`/game/${ing1}/${ing2}/${ing3}/${ing4}/${ing5}/${recipeName}`} />;
    return <Redirect to="/map" />;
  }

  const accessNotebook = (e) => {
    setNotebook(true);
  };

  if (notebook) {
    return <Redirect to="/notebook" />;
  }

  const toInstructions = (e) => {
    setInst(true);
  };

  if (inst) {
    return <Redirect to="/instructions" />;
  }

  return (
    <>
      <div class="wrapper" id="ingwrapper">
        <div id="recipes">
          <form id="ingredient-list" onSubmit={handleSubmit}>
            {/* <div id="titlewrapper" >
              <h1>homemade</h1>
            </div> */}
            <p>
              <span id="titlespan">homemade</span> &nbsp;&nbsp;&nbsp; enter 5 ingredients below:
            </p>
            <div class="ingredient" id="toping">
              <input
                type="text"
                name="ing1"
                onChange={handleIng1Change}
                value={ing1}
                placeholder="ingredient 1"
                autoComplete="off"
                autoFocus
              />
            </div>
            <div class="ingredient">
              <input
                type="text"
                name="ing2"
                onChange={handleIng2Change}
                value={ing2}
                placeholder="ingredient 2"
                autoComplete="off"
              />
            </div>
            <div class="ingredient">
              <input
                type="text"
                name="ing3"
                onChange={handleIng3Change}
                value={ing3}
                placeholder="ingredient 3"
                autoComplete="off"
              />
            </div>
            <div class="ingredient">
              <input
                type="text"
                name="ing4"
                onChange={handleIng4Change}
                value={ing4}
                placeholder="ingredient 4"
                autoComplete="off"
              />
            </div>
            <div class="ingredient">
              <input
                type="text"
                name="ing5"
                onChange={handleIng5Change}
                value={ing5}
                placeholder="ingredient 5"
                autoComplete="off"
              />
            </div>
            <div id="submitbtn">
              <button type="submit">submit</button>
            </div>
          </form>
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
            <button id="instbtn" onClick={toInstructions}>
              instructions
            </button>
          </div>
          <div>
            <button id="notebookbtn" onClick={accessNotebook}>
              notebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ingredients;
