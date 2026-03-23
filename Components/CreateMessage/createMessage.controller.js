const createMessageController = {
  get: (req, res) => {
    res.render("CreateMessage/CreateMessage.view.ejs");
  },
};

module.exports = createMessageController;
