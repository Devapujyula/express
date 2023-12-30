var express = require("express");

var app = express();

var products = require("./routes/05products");
var users = require("./routes/03users");
var orders = require("./routes/04orders");

app.use("/products", products);
app.use("/get_products", products);
app.use("/users", users);
app.use("/get_users", users);
// app.use("/search", users);
app.use("/orders", orders);
app.use("/get_orders", orders);

app.get("/", (req, res) => {
  res.send("Hello world Welcome to express");
});

app.listen(4000);
