const express = require("express");
const mongoose = require("mongoose");
const { DATABASE_PATH } = require("./constants");
const router = require("./Routes/TodoRoutes");

// Connecting to DB
mongoose.connect(DATABASE_PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  return res.json({ message: "App worked!" });
});

app.use('/api', router);

app.listen(3000, () => {
  console.log("App is listening at port 3000");
});
