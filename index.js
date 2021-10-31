require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/todoRoutes");
const { DATABASE_PATH } = require("./constants");

// Connecting to DB
mongoose
  .connect(DATABASE_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.error(err));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.json({ message: "App worked!" });
});

app.use("/api", router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
