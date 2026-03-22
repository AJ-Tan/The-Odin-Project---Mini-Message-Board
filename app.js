const express = require("express");
const path = require("path");
const messageBoardRoute = require("./Components/MessageBoard/messageBoard.route");
const app = express();

app.use(express.static(path.join(__dirname, "Components")));
app.set("views", path.join(__dirname, "Components"));
app.set("view engine", "ejs");
app.use("/", messageBoardRoute);

app.listen(1022, "localhost", (err) => {
  if (err) throw err;
  console.log(`Server is running on http://localhost:1022`);
});
