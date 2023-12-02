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

module.exports = { getallcardsinfo,createcardsinfo };
