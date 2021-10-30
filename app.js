const express = require("express");
const mongoose = require("mongoose");
const { DATABASE_PATH } = require("./constants");
const router = require("./Routes/TodoRoutes");
//test text
// Connecting to DB
mongoose.connect(DATABASE_PATH, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const add=(num1,num2)=>num1+num2;
console.log(add(3,5));
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.json({ message: "App worked!" });
});

app.use("/api", router);
console.log("Testing console log");
app.listen(process.env.PORT || 5000, () => {
  console.log("App is listening at port 3000");
});
