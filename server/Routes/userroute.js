const express = require('express')

const router = express.Router()
const {createuserinfo, getuserinfo } = require("../Controllers/usercontroller")

router.post("/", createuserinfo)
router.get("/", getuserinfo)

module.exports = router
