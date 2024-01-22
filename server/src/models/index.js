
const { Pool } = require("pg");

// coneção ao banco de dados
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});
const sequelize = new Sequelize(pool.DB, pool.USER, pool.PASSWORD, {
  host: pool.HOST,
  dialect: pool.dialect,
  operatorsAliases: false,

  pool: {
    max: pool.pool.max,
    min: pool.pool.min,
    acquire: pool.pool.acquire,
    idle: pool.pool.idle,
  },
});

const db = {};
db.pool = sequelize;
db.Sequelize = Sequelize;

db.tarefas = require("./tarefas")(sequelize, Sequelize);
module.exports = db;
