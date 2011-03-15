var fs = require("fs"),
    hh = "",
    ww = "";

fs.readFile("files/a.txt", function(err, data) {
    hh = data;
});

fs.readFile("files/b.txt", function(err, data) {
    ww = data;
});

console.log("Text: '" + hh + " " + ww + "'");
