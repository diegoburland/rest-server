require("./config/config");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT;
app.get("/users", (req, res) => {
  res.json("Hello word");
});

app.post("/users", (req, res) => {
  const body = req.body;

  res.json(body);
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    id,
  });
});

app.listen(port, () => {
  console.log(`listen on port  ${port}`);
});
