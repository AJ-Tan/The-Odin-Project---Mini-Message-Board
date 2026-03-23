const express = require("express");
const path = require("path");
const messageBoardRoute = require("./Components/MessageBoard/messageBoard.route");
const createMessageRoute = require("./Components/CreateMessage/createMessage.route");
const app = express();

app.use(express.static(path.join(__dirname, "Components")));
app.set("views", path.join(__dirname, "Components"));
app.set("view engine", "ejs");
app.use("/", messageBoardRoute);
app.use("/create", createMessageRoute);

const PORT = process.env.PORT || 1022;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on http://localhost:${PORT}`);
});
