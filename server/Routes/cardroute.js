const express = require('express')

const router = express.Router()
const { getallcardsinfo,getcardsinfoById,createcardsinfo} = require("../Controllers/cardscontroller")

router.get("/", getallcardsinfo)
router.post("/", createcardsinfo)
router.get("/:id", getcardsinfoById)

module.exports = router