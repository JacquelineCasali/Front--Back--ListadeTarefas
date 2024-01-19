const { Pool } = require("pg");

// coneção ao banco de dados
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

const tarefaController = {
  // listando os pets
  lista:
    ("/",
    async (req, res) => {
      try {
        const { rows } = await pool.query("SELECT * FROM tarefa");
        return res.status(200).send(rows);
      } catch (err) {
        return res.status(400).send(err);
      }
    }),

  // listar um pet
  show:
    ("/:id",
    async (req, res) => {
      const { id } = req.params;

      try {
        const { rows } = await pool.query(
          "SELECT * FROM tarefa WHERE id=($1)",
          [id]
        );
        return res.status(200).send(rows);
      } catch (err) {
        return res.status(400).send(err);
      }
    }),

  // criando uma tarefa
  create:
    ("/",
    async (req, res) => {
      const { titulo } = req.body;
      const { descricao } = req.body;
    

      try {
        await pool.query(
          "INSERT INTO tarefa(titulo, descricao) VALUES ($1,$2) RETURNING * ",
          [titulo, descricao]
        );
        return res.status(200).send({ msg: "Tarefa cadastrada com sucesso " });
      } catch (err) {
        return res.status(400).send({ msg: "Tarefa já cadastrado " });
      }
    }),

  //   // atualizando os pets
  update:
    ("/:id",
    async (req, res) => {
      const { id } = req.params;
      const { titulo, descricao} = req.body;

      try {
        await pool.query(
          "UPDATE tarefa SET titulo=($1), descricao=($2) WHERE pets_id=($3) RETURNING * ",
          [titulo, descricao, id]
        );
        return res.status(200).send({ msg: "Tarefa atulizada com sucesso " });
      } catch (err) {
        return res.status(400).send({ msg: "Tarefa já cadastrado " });
      }
    }),

  // deletando
  delete:
    ("/:id",
    async (req, res) => {
      const { id } = req.params;

      try {
        await pool.query("DELETE FROM tarefa WHERE id=($1)", [id]);
        return res.status(200).send({ msg: "Deletado com sucesso " });
      } catch (err) {
        return res.status(400).send(err);
      }
    }),
};

module.exports = tarefaController;
