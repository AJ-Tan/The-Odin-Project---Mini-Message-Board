const db = require("./db");

// Simulate database
const messageData = async () => {
  return {
    statusCode: 200,
    json: async () => db,
  };
};

const insertDB = (user, message) => {
  db.push({ text: message, user, added: new Date() });
};

module.exports = { insertDB, messageData };
