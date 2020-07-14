const express = require("express");
const app = express();
// const ejs = require("ejs");

const { PORT } = require("./config");
const localPort = PORT || 5000;
const db = require("./config");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => {
  res.send(`Welcome REST API`);
});
app.use("/api/products", require("./routes/products"));

// // Membaca file .ejs
// app.set("view engine", "ejs");

// // membaca file statis di folder views
// app.use(express.static("views"));

// app.get("/api/products", (req, res) => {
//   res.render("pages/home");
// });

if (db) {
  app.listen(localPort, (req, res) => {
    console.log(`Server runs on port ${localPort}`);
  });
}
