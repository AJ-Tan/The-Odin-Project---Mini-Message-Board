const express = require("express");
const messageBoardController = require("./messageBoard.controller");
const router = express.Router();

router.use(messageBoardController.fetchData);
router.get("/", messageBoardController.get);
router.get("/reset", messageBoardController.reset);

module.exports = router;
