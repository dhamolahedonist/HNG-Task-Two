const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    name: String, // Defined field
  },
  {
    strict: false, // Allow dynamic fields
  }
);
module.exports = mongoose.model("Person", PersonSchema);
