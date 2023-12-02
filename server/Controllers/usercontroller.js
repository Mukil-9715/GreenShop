const usermodel = require("../Models/usermodel");
const mongoose = require("mongoose");

//To Create 

const createuserinfo = async (req, res) => {
    const { user, email, phone_number, password} = req.body;
  
    try {
      const task = await usermodel.create({ user, email, phone_number, password});
      res.status(200).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  //To Get all

const getuserinfo = async (req, res) => {
    try {
      const task = await usermodel.find();
      res.status(200).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  

  module.exports = { createuserinfo, getuserinfo};
