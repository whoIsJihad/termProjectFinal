const express = require("express");

require("dotenv").config();
const cors = require("cors");
const hudai = require("./hudai/order.json");
const morgan = require("morgan");
const app = express();

app.use(express.json());
app.use(cors());
const db = require("./db");

const port = process.env.PORT || 3001;
/*
app.get("/mahi",(req,res)=>{
    res.send({mahi:"mahia mahi",jihad:"jihadia jihad"});
})

app.get("/mahi",(req,res)=>{
    res.status(404).json({
        status:"succ",
        user:"zucc"
    });
});
*/

app.use(morgan("dev"));

//get all order

app.get("/api/v1/order", async (req, res) => {
  try {
    const queryResult = await db.query(
      "select * from users u join orders o on(u.userid=o.userid) where u.userid=1 or u.userid=2;"
    );
    console.log(queryResult);

    res.status(200).json({
      "veja?": "haa vai",
      results: queryResult.rows.length,
      data: queryResult.rows,
    });
  } catch (e) {
    console.log(e);
  }
});

//sending all category

app.get("/api/v1/category", async (req, res) => {
  try {
      const queryResult = await db.query(
      "select c.categoryid,c.categoryname,c.description,p.productid,p.Name from categories c join products p on (c.categoryid=p.categoryid) ;"
    );

    //const queryResult = await db.query("select * from categories ;");
    console.log(queryResult);
    res.status(200).json({
      data: queryResult.rows,
    });
  } catch (e) {
    console.log(e);
  }
});

//get a object

app.get("/api/v1/order/:id", async (req, res) => {
  try {
    console.log(req.params.id);

    const queryResult = await db.query("select * from users where userid=$1", [
      req.params.id,
    ]);
    console.log(queryResult.rows[0]);

    res.status(200).json({
      "veja?": "ji",
      results: queryResult.rows.length,
      data: queryResult.rows[0],
    });
  } catch (e) {
    console.log(e);
  }
});

//create an User

app.post("/api/v1/user/createUser", async (req, res) => {
  try {
    const queryResult = await db.query(
      "INSERT INTO users (firstname, lastname, email, roadno, houseno, city, district, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *",
      [
        req.body.FirstName,
        req.body.LastName,
        req.body.email,
        req.body.roadno,
        req.body.houseNo,
        req.body.city,
        req.body.District,
        req.body.password,
      ]
    );
    console.log(queryResult.rows);

    res.status(200).json({
      results: "Done",
      data: queryResult.rows[0],
    });
  } catch (e) {
    console.log(e);
  }
  console.log(req.body);
});

//update an order
app.put("/api/v1/order/:id", (req, res) => {
  console.log(req.params);
  res.send("solid body reh");
});

//delete

app.delete("/api/v1/order/:id", (req, res) => {
  console.log(req.body);
  //res.send("behen ka louda");
  res.status(204).json({ message: "Order deleted successfully" });
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
