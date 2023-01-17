const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const SECRET = "98sbciosalkzmhjo";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "banco",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { nome } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length == 0) {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query(
          "INSERT INTO usuarios (nome, email, password) VALUES (?,?,?)",
          [nome, email, hash],
          (error, response) => {
            if (err) {
              res.send(err);
            }

            res.send({ msg: "USUÁRIO CADASTRADO" });
          }
        );
      });
    } else {
      res.send({ msg: "EMAIL JÁ EM USO. PREENCHA NOVAMENTE" });
    }
  });
});

app.post("/login", (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (error, response) => {
        if (error) {
          res.send(error);
        }
        if (response == true) {

          const token = jwt.sign({ id: result[0].idusuarios, nome: result[0].nome, email: result[0].email }, SECRET, { expiresIn: 300 });
          return res.json({ response, token });
        } else {
          res.send({ msg: "Email ou senha incorretos" });
        }
      });
    } else {
      res.send({ msg: "Usuário não registrado" });
    }
  });

});

app.get("/usuario", (req, res) => {
  db.query("SELECT nome, email FROM usuarios", (err, result) => {
    res.send(result);
  })
})

app.listen(3001, () => {
  console.log("nice");
});
