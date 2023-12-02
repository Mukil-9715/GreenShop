const express = require('express')

const router = express.Router()
const {createTask,getTask } = require("../Controllers/Boiler-plateController")

router.post("/", createTask)
router.get("/", getTask)

module.exports = router
