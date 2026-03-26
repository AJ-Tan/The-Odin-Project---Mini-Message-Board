const db = require("./db");
const { getAllMessage, insertMessage } = require("./db/queries");

// Simulate database
const messageData = async () => {
  const data = await getAllMessage();
  return {
    statusCode: 200,
    json: async () => data,
  };
};

const insertDB = (user, message) => {
  insertMessage(user, message);
};

module.exports = { insertDB, messageData };
