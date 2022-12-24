const express = require("express");

const app = express();

app.listen(4000, () => console.log("Server running on 4000"));

app.get("/", (req, res) => {
  res.json({ "NewAPP?": "Yes" });
});

// const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];

// countries.forEach((item) => {
//   return console.log(item);
// });
