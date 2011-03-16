var fs = require("fs"),
    Promise = require("./vendor/promise").Promise,
    all = require("./vendor/promise").all,
    hh = "",
    ww = "";

var promise1 = new Promise();
fs.readFile("files/a.txt", function(err, data) {
    promise1.resolve(data);
});
var promise2 = new Promise();
fs.readFile("files/b.txt", function(err, data) {
    promise2.resolve(data);
});
var promise3 = all(promise1, promise2);
promise3.then(function(result){
        console.log("Text: '" + result[0] + " " + result[1] + "'");
    }
);
