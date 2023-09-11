const Person = require("../models/personModel");

const createPerson = async (req, res) => {
  try {
    const { name } = req.body;
    if (typeof name !== "string") {
      return res.status(400).json({
        success: false,
        message: "Name must be a string",
      });
    }

    const val = await Person.create({
      name,
    });
    return res.status(200).json({
      success: true,
      message: "Person created successfully",
      data: val,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPerson = async (req, res) => {
  try {
    const userId = req.params.user_id;
    console.log(userId);
    const person = await Person.findById(userId);
    if (!person) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updatePerson = async (req, res) => {
  try {
    const update = await Person.findByIdAndUpdate(
      req.params.user_id,
      req.body,
      {
        new: true,
      }
    );
    if (!update) {
      return res.status(400).json({
        success: false,
        message: "Failed to update Person",
      });
    }
    res
      .status(200)
      .json({ success: true, message: "Person successfully update", update });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deletePerson = async (req, res) => {
  try {
    const deletePerson = await Person.findById(req.params.user_id);

    if (!deletePerson) {
      return res
        .status(401)
        .send({ success: false, error: "Person entry not found" });
    }

    await Person.findByIdAndDelete({ _id: req.params.user_id });

    return res
      .status(200)
      .json({ success: true, message: "Person successfully deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createPerson, getPerson, updatePerson, deletePerson };
