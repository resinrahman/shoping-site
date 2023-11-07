const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2")
const port = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`sever running in ${port}`);
});

const db = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "",
  database: "db_shopping",
  port: 3306,
});

// Check Database Connection

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  else{
    console.log("Database Connected");
  }

});





app.post("/State", (req, res) => {
  let Qry =
    "insert into tbl_state (state_name) value('" + req.body.state_name + "')";
  db.query(Qry, (err, result) => {
    if (err) {
      console.log("Error");
    } else {
      res.send({
        message: "Data Saved",
      });
    }
  });
});
app.get("/State", (req, res) => {
  let SelQry = "select * from tbl_state";
  db.query(SelQry, (err, result) => {
    if (err) {
      console.log("Error");
    } else if (result.length > 0) {
      res.send({
        state: result
      });
    }
    else {
      res.send({
        state: [],
      });
    }
  });
});