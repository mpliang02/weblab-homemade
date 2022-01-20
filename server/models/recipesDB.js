const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  dishName: String,
  ingredients: [String],
});

module.exports = mongoose.model("Recipe", RecipeSchema);
