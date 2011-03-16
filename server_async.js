//npm install async
var fs = require("fs"),
    async = require("async"),
    hh = "",
    ww = "";


async.parallel([
    function(callback){
        fs.readFile("files/a.txt", function(err, data) {
            hh = data;
            callback();
        });
    },
    function(callback){
        fs.readFile("files/b.txt", function(err, data) {
            ww = data;
            callback();
        });        
    }
], function () {
    console.log("Text: '" + hh + " " + ww + "'");
});
