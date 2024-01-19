module.exports = {
  HOST: "localhost",
  USER: "postgres",
  password: "",
  DB: "listatarefa",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
