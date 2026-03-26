const { messageData, resetDefault } = require("../models/messageData");
const { format } = require("date-fns");

const messageBoardController = {
  fetchData: async (req, _, next) => {
    const fetchData = await messageData();
    const data = await fetchData.json();
    req.statusCode = fetchData.statusCode;
    req.messageData = data.map((item) => ({
      ...item,
      added: format(item.added, "yyyy-MM-dd HH:mm a"),
    }));
    next();
  },
  get: (req, res) => {
    if (req.statusCode !== 200) {
      res.send("DB Error");
      return;
    }

    res.render("MessageBoard/MessageBoard.view.ejs", {
      messages: req.messageData,
    });
  },
  reset: async (req, res) => {
    await resetDefault();
    res.redirect("/");
  },
};

module.exports = messageBoardController;
