const express = require("express");
const app = express();


app.get("/:wilian", (req, res) => {
    const { wilian } = req.params;
    res.status(200).json({
      mensagem: `Seja Bem vindo ${wilian}!`
    });
  });
app.get("/nome", (req, res) => {
    res.send("Hello World!");
  });

app.listen(3020, () => {
    console.log("Servidor On Junior Junior WILIAN MIURA SATO");
  });