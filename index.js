const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors({ origin: "*" }));
app.use(express.json());

const {email, email1, email2} = require("./email");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/email", (req, res) => {
  const body = {
    // name: req.body.name,
    // email: req.body.email,
    // phone: req.body.phone,
    message: req.body.message,
  };
  email1(body, res);
});
app.post("/contact", (req, res) => {
  const body = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
    service: req.body.service
  };
  email(body, res);
})

app.post("/email2", (req, res) => {

  const body = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };
  email2(body, res);
})
app.listen(5000, () => {
  console.log("Listening on port 5000");
});
