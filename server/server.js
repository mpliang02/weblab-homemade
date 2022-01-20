/*
|--------------------------------------------------------------------------
| server.js -- The core of your server
|--------------------------------------------------------------------------
|
| This file defines how your server starts up. Think of it as the main() of your server.
| At a high level, this file does the following things:
| - Connect to the database
| - Sets up server middleware (i.e. addons that enable things like json parsing, user login)
| - Hooks up all the backend routes specified in api.js
| - Fowards frontend routes that should be handled by the React router
| - Sets up error handling in case something goes wrong when handling a request
| - Actually starts the webserver
*/

// validator runs some basic checks to make sure you've set everything up correctly
// this is a tool provided by staff, so you don't need to worry about it
require("dotenv").config();

const validator = require("./validator");
validator.checkSetup();

//import libraries needed for the webserver to work!
const http = require("http");
const express = require("express"); // backend framework for our node server.
const session = require("express-session"); // library that stores info about each connected user
const mongoose = require("mongoose"); // library to connect to MongoDB
const path = require("path"); // provide utilities for working with file and directory paths

const api = require("./api");
const auth = require("./auth");

// socket stuff
const socketManager = require("./server-socket");

// Server configuration below
const mongoConnectionURL =
  "mongodb+srv://mpliang:webDevIsPain890!@cluster0.y0aii.mongodb.net/recipesDB?retryWrites=true&w=majority";
// "mongodb+srv://admin:iYkImZrhSq4DSS0V@cluster0.bnbly.mongodb.net/homemadetest?retryWrites=true&w=majority";
// const databaseName = "homemadetest";
const databaseName = "recipesDB";

// connect to mongodb
mongoose
  .connect(mongoConnectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: databaseName,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

const RecipeSchema = new mongoose.Schema({
  dishName: String,
  ingredients: [String],
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

let scallionPancakes = new Recipe({
  dishName: "Scallion Pancakes",
  ingredients: ["scallions", "flour", "water", "salt", "oil"],
});

let dumplings = new Recipe({
  dishName: "Dumplings",
  ingredients: [
    "flour",
    "water",
    "pork",
    "cabbage",
    "salt",
    "scallions",
    "soy sauce",
    "sesame oil",
  ],
});

let pizza = new Recipe({
  dishName: "Pizza",
  ingredients: ["flour", "salt", "yeast", "cheese", "tomatoes", "sugar", "basil"],
});

let ramen = new Recipe({
  dishName: "Ramen",
  ingredients: ["broth", "noodles", "pork", "bamboo", "eggs", "scallions", "seaweed"],
});

let chickenSandwich = new Recipe({
  dishName: "Chicken Sandwich",
  ingredients: ["bread", "chicken", "tomatoes", "lettuce", "pickles", "mayonnaise"],
});

let applePie = new Recipe({
  dishName: "Apple Pie",
  ingredients: ["flour", "salt", "sugar", "apples", "cinnamon", "butter", "nutmeg"],
});

let cheesecake = new Recipe({
  dishName: "Cheesecake",
  ingredients: [
    "graham crackers",
    "sugar",
    "butter",
    "cream cheese",
    "eggs",
    "lemon juice",
    "sour cream",
    "salt",
  ],
});

let falafel = new Recipe({
  dishName: "Falafel",
  ingredients: [
    "chickpeas",
    "onions",
    "garlic",
    "parsley",
    "cilantro",
    "cumin",
    "salt",
    "cardamom",
    "pepper",
  ],
});

let burgers = new Recipe({
  dishName: "Burgers",
  ingredients: [
    "bread",
    "beef",
    "salt",
    "pepper",
    "cheese",
    "tomatoes",
    "lettuce",
    "onions",
    "ketchup",
    "mayonnaise",
  ],
});

let donuts = new Recipe({
  dishName: "Donuts",
  ingredients: ["flour", "salt", "sugar", "yeast", "milk", "eggs", "butter", "glaze"],
});

scallionPancakes.save().then((dish) => console.log(`Added ${dish.dishName}`));
dumplings.save().then((dish) => console.log(`Added ${dish.dishName}`));
pizza.save().then((dish) => console.log(`Added ${dish.dishName}`));
ramen.save().then((dish) => console.log(`Added ${dish.dishName}`));
chickenSandwich.save().then((dish) => console.log(`Added ${dish.dishName}`));
applePie.save().then((dish) => console.log(`Added ${dish.dishName}`));
cheesecake.save().then((dish) => console.log(`Added ${dish.dishName}`));
falafel.save().then((dish) => console.log(`Added ${dish.dishName}`));
burgers.save().then((dish) => console.log(`Added ${dish.dishName}`));
donuts.save().then((dish) => console.log(`Added ${dish.dishName}`));

// create a new express server
const app = express();
app.use(validator.checkRoutes);

// allow us to process POST requests
app.use(express.json());

// set up a session, which will persist login data across requests
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// this checks if the user is logged in, and populates "req.user"
app.use(auth.populateCurrentUser);

// connect user-defined routes
app.use("/api", api);

// load the compiled react files, which will serve /index.html and /bundle.js
const reactPath = path.resolve(__dirname, "..", "client", "dist");
app.use(express.static(reactPath));

// for all other routes, render index.html and let react router handle it
app.get("*", (req, res) => {
  res.sendFile(path.join(reactPath, "index.html"));
});

// any server errors cause this function to run
app.use((err, req, res, next) => {
  const status = err.status || 500;
  if (status === 500) {
    // 500 means Internal Server Error
    console.log("The server errored when processing a request!");
    console.log(err);
  }

  res.status(status);
  res.send({
    status: status,
    message: err.message,
  });
});

// hardcode port to 3000 for now
const port = process.env.PORT || 3000;
const server = http.Server(app);
socketManager.init(server);

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

modules.export = Recipe;
