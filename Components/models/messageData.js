const db = require("./db");

// Simulate database
const messageData = async () => {
  return {
    statusCode: 200,
    json: async () => db,
  };
};

module.exports = messageData;
