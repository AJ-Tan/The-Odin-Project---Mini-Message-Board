const pool = require("./pool");
const { format } = require("date-fns");

const getAllMessage = async () => {
  const { rows } = await pool.query(
    `SELECT * FROM "Mini Message Board".user_messages`,
  );
  return rows;
};

const insertMessage = async (user, message) => {
  await pool.query(
    `INSERT INTO "Mini Message Board".user_messages ("user", text, added) VALUES ($1,$2,$3)`,
    [user, message, format(new Date(), "yyyy-MM-dd HH:mm:ss")],
  );
};

module.exports = {
  getAllMessage,
  insertMessage,
};
