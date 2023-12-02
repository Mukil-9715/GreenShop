const express = require('express')

const router = express.Router()
const { getallcardsinfo,createcardsinfo} = require("../Controllers/cardscontroller")

router.get("/", getallcardsinfo)
router.post("/", createcardsinfo)

module.exports = router