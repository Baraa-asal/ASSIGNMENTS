const express = require("express");
const app = express();

// req is short for request
// res is short for response

//in line 8: app is listening in port 8000, so any get request comes to 8000
//it will come to the route that matches the get request and it will be written as below
//get method takes two parameters, the first is the path url, the second is a callback function
//the callback function is expecting two parameters from Express because Express is calling it,
//when it's called from express, it performs the code between the curly brackets, 
//res is object, it has methods, we will use them to return results to client side through the port, ps: we do not use -return- keyword.

app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
