const express = require("express");
const mongoose = require("mongoose");
const { DATABASE_PATH } = require("./constants");
const router = require("./routes/TodoRoutes");

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

app.listen(process.env.PORT || 5000, () => {
  console.log("App is listening at port 3000");
});
