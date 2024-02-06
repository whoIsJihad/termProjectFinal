const express = require("express");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
