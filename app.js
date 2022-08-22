require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const mainRouter = require("./routes/main");
var bodyParser = require("body-parser");
const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

//middleware
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/v1", mainRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//port
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server started on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
