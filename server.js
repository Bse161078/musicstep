const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});

// "start": "react-scripts start",
// "start": "node server.js",


//REACT_APP_BASE_URL=https://music-pass-nodejs.herokuapp.com/
//http://localhost:3000 

///aqee:  https://music-pass-backend.herokuapp.com/
///https://music-pass.herokuapp.com/
