const { insertDB } = require("../models/messageData");

const createMessageController = {
  get: (req, res) => {
    const token = crypto.randomUUID();
    req.session.formToken = token;
    res.render("CreateMessage/CreateMessage.view.ejs", { token });
  },
  post: (req, res) => {
    console.log(req.session);
    if (
      !req.session.formToken ||
      req.body.formToken !== req.session.formToken
    ) {
      return res.redirect("/");
    }

    req.session.formToken = null;
    insertDB(req.body.user, req.body.message);
    res.redirect("../../");
  },
};

module.exports = createMessageController;
