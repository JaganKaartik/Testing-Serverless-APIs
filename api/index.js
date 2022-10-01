const app = require("express")();
const food = require("../db/food");

app.get("/diet/all", (req, res) => {
  res.json(food);
});

module.exports = app;
