const fs = require("fs");
const path = require("path");
var raw = fs.readFileSync(path.join(__dirname, "highlander.json"));
var highlander = JSON.parse(raw);
module.exports = highlander;