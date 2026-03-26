const db = require("./db");
const { getAllMessage, insertMessage, resetData } = require("./db/queries");

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

const resetDefault = async () => {
  await resetData();
};

module.exports = { insertDB, messageData, resetDefault };
