const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    strict: false, // Allow dynamic fields
  }
);

module.exports = mongoose.model("Person", PersonSchema);
