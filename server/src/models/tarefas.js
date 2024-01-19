module.exports = (sequelize, Sequelize) => {
  const Tarefas = sequelize.define("tarefas", {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    titulo: {
      type: Sequelize.STRING,
      // nao permite valor nulo allowNull:false,
      allowNull: false,
    },

    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
     // UNIQUE
    },
    
  });
  return Tarefas;
};
