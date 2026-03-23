const { insertDB } = require("../models/messageData");

const createMessageController = {
  get: (req, res) => {
    res.render("CreateMessage/CreateMessage.view.ejs");
  },
  post: (req, res) => {
    insertDB(req.body.user, req.body.message);
    res.redirect("../../");
  },
};

module.exports = createMessageController;
