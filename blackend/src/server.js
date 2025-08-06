let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
const cors = require("cors");
const { serverError } = require("./response");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

let app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", require("./routes"));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  const errMessage = typeof err === "string" ? err : err.message;
  return res.status(500).send(serverError("Something want wrong", errMessage));
});

module.exports = app;
