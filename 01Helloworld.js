// Importing the express js module into our application
var express = require("express");

// we are intitating the app using the express
// Using the app we are configuring the route of "GET" and path is "/"
// whenever request for this endpoint / => hello world welcome to express
/**
 * GET
 * POST
 * PUT
 * PATCH
 * DELETE
 *
 * No - this is totally based on your application
 *
 * app.get('/', (req, res) => {
 * //equest captured
 *
 * // response as output})
 */
var app = express();

app.get("/", (req, res) => {
  res.send("Hello world -> Welcome to express");
});

app.get("/getTrainingIndex", (req, res) => {
  var trainingModule = {
    moduleId: 36,
    moduleName: "Express",
    moduleStartDate: "23-12-2023",
    modeluIsActive: true,
  };

  res.send(trainingModule);
});

// we are starting the app at port 4000
// node -> http,createServer
app.listen(4000);
