const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./Routes/userroute");
const cardsRoutes = require("./Routes/cardroute");
const cors = require("cors");

//Middleware
app.use((req, res, next) => {
  console.log("path :" + req.path + ", method :" + req.method);
  next();
});

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/cards", cardsRoutes);


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("DB connected successfully" + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
