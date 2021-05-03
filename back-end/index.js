const express = require("express");
const app = express();
const https = require("https");

app.get("/", (req, res) => {
  res.send("Root route");
});

app.get("/chuck", (req, res) => {
  https.get("https://api.chucknorris.io/jokes/random", (response) => {
    response.on("data", (d) => {
      const data = JSON.parse(d);
      const quote = data.value;
      res.json({ quote });
    });
  });
});

app.listen(5000, () => {
  console.log(`Listening at port 5000`);
});
