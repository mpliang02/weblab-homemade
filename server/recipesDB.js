const mongoose = require("mongoose");

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
