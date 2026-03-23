const express = require("express");
const createMessageController = require("./createMessage.controller");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.get("/", createMessageController.get);
router.post("/insert", createMessageController.post);

module.exports = router;
