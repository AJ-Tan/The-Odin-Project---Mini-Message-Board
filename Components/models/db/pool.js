const { Pool } = require("pg");
module.exports = new Pool({
  connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:${process.env.DB_PORT}/odin-project-dbs`,
});
