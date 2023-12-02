const TaskModel = require("../Models/Boiler-plateModel");
const mongoose = require("mongoose");

//To Create a task - post

const createTask = async (req, res) => {
    const { title, description } = req.body;
  
    try {
      const task = await TaskModel.create({ title, description });
      res.status(200).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

  //To Get a task - Get

const getTask = async (req, res) => {
    try {
      const task = await TaskModel.find();
      res.status(200).json(task);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  

  module.exports = { createTask, getTask};
