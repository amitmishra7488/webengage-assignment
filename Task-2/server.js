const { default: axios } = require("axios");
const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");

const app = express();

nunjucks.configure("views", {
 autoescape: true,
 express: app,
});

const users = ["John", "Paul", "George", "Ringo"];

const basepath = path.resolve(__dirname, "views");

app.get("/", async (req, res) => {
 const { data } = await axios.get(
  "https://jsonplaceholder.typicode.com/users"
 );

 console.log(data[0]);

 nunjucks.render(
  path.join(basepath, "index.njk"),
  { users: data, title: "Hello World" },
  (err, html) => {
   if (err) return res.send(err);
   res.send(html);
  }
 );
});

app.listen(3000, () => {
 console.log("Server started on port 3000");
});
