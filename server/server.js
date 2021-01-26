require("./config/config");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

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

mongoose.connect(
  "mongodb://localhost:27017/server",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err, res) => {
    if (err) throw err;
    console.log("base connect");
  }
);

app.listen(port, () => {
  console.log(`listen on port  ${port}`);
});
