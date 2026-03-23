const express = require("express");
const createMessageController = require("./createMessage.controller");
const router = express.Router();

router.get("/", createMessageController.get);

module.exports = router;
