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
      //obrigatorio
      required:true,
      UNIQUE:true,
    },

    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
      required:true,
      UNIQUE:true,
    },
 
  });
  return Tarefas;
};
