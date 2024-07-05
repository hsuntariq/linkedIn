const express = require("express");
const handler = require("./middlewares/errorMiddleware");
const connectDB = require("./config/connect");

const app = express();
require("colors");
require("dotenv").config();

// connect to DB

connectDB();

// convert data into json

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user/", require("./routes/userRoutes"));

app.use(handler);

app.listen(process.env.PORT, () =>
  console.log(`Server started on port:${process.env.PORT.blue} `)
);
