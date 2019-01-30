const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = "3000";

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/sendName", (req, res) => {
  console.log(req.body.name);
  res.send("I'll try to remember that!");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/looks");
});

app.use(express.static(path.join(__dirname, "/looks")));
app.listen(port, function() {
  console.log("Server listening on port " + port);
});

const data = new Uint8Array(Buffer.from('Hello Node.js'));
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});