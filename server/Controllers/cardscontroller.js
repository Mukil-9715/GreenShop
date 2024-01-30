const cardsmodel = require("../Models/cardmodel");
const mongoose = require("mongoose");


//To Create 

const createcardsinfo = async (req, res) => {
    const { user, email, phone_number, password} = req.body;
  
    try {
      const task = await usermodel.create({ user, email, phone_number, password});
      res.status(200).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };


//To Get all

const getallcardsinfo = async (req, res) => {
  try {
    const task = await cardsmodel.find();
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getcardsinfoById = async (req, res) => {
  const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid Task ID" });
    }

  try {
    const singleTask = await cardsmodel.findById(id);
    if (!singleTask) {
      return res.status(404).json({ message: "Invalid Task ID" });
    }
    res.status(200).json(singleTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getallcardsinfo,createcardsinfo,getcardsinfoById };
