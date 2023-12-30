var express = require("express");

var app = express();

/**
 * E-commerce Application
 * - Users
 * - Products
 * - Items
 * - Revises
 * - Comments
 * - Images
 * - Videos
 * - Returns
 * - Orders
 */

// CRUD User

app.post("/create_user", (req, res) => {
  res.send("mailId or phoneNumber to logIn");
});

app.put("/update_user", (req, res) => {
  res.send("mailId or phoneNumber to logIn");
});

app.get("/read-users", (req, res) => {
  res.send("List of Users");
});

app.get("/user-details", (req, res) => {
  const userDetails = {
    userId: 23045,
    userName: "Sowmya",
    userDesignation: " Senior Software Developer",
  };
  res.send(userDetails);
});

app.delete("/update_user", (req, res) => {
  res.send("Deleted your account succesfully..!");
});

// CRUD Products
app.post("/create_product", (req, res) => {
  res.send("mailId or phoneNumber to logIn");
});

app.put("/update_product", (req, res) => {
  res.send("mailId or phoneNumber to logIn");
});

app.get("/read-products", (req, res) => {
  res.send("List of Users");
});

app.get("/user-products", (req, res) => {
  const userDetails = {
    userId: 23045,
    userName: "Sowmya",
    userDesignation: " Senior Software Developer",
  };
  res.send(userDetails);
});

app.delete("/update_product", (req, res) => {
  res.send("Deleted your account succesfully..!");
});

app.listen(4000);
