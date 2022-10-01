const app = require("express")();
const diet = require("../db/diet");

app.get("/diet/all", (_, res) => {
  res.json(diet);
});

module.exports = app;
