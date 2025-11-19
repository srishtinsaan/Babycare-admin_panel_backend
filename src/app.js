const express = require("express");
const cors = require("cors");
const imageRoutes = require("./src/routes/imageRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("public/uploads"));
app.use("/api", imageRoutes);

module.exports = app;
