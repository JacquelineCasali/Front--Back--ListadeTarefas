const express = require("express");
const router = express.Router();
// const userController = require("../controllers/userController");

const tarefaController = require("../controllers/tarefaController");
// pets

router.get("/", tarefaController.lista);
// um pet ler 1
router.get("/:id", tarefaController.show);
// router.get("/user/:id", userController.show);

router.post("/", tarefaController.create);
router.put("/:id", tarefaController.update);
router.delete("/:id", tarefaController.delete);

// router.post("/pet/:user_id", petController.create);

module.exports = router;
