require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./src/config/viewEngine");
const webRoutes = require("./src/routes/web");
const connection = require("./src/config/database,js");

const app = express();
const port = process.env.PORT;

//config template engine
configViewEngine(app);

//Khai báo route
app.use("/", webRoutes);

//simple query
connection.query("SELECT * FROM Users u", function (err, results, fields) {
  console.log(results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
