const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  userid: String,
  ings: [String],
  recipeName: String,
});

// compile model from schema
module.exports = mongoose.model("Note", NoteSchema);