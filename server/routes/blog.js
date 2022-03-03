const express = require("express");
const router = express.Router();

router.get("/post", (req, res) => {
  res.json({
    titulo: "Meu primeiro Post",
    conteudo: "Kronus Tecnologia",
    descricao: "Primeiro Post",
    autor: "João",
  });
});

module.exports = router;
