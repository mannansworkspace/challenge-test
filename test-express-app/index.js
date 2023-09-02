const express = require("express");
var cors = require("cors");
const { default: mongoose } = require("mongoose");
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;
const routes = require("./routes/index");
const { errorHandler } = require("./middlewares/error.middleware");

app.use(cors()); // * enable cors
app.options('*', cors());

app.use(express.json({ limit: "500mb" })); // * parse json request body
app.use(express.urlencoded({ limit: "500mb", extended: true }));
app.use(routes);
app.use(errorHandler);

mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
});
