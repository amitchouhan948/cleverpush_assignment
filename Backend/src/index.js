const express = require("express");
const cors=require("cors")
require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.listen(PORT,() => {
  console.log(`server started at http://localhost:${PORT}`);
});
