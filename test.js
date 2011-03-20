var Promise  = require("./lib/promise").Promise,
    All      = require("./lib/promise").all,
    Mongo    = require("mongodb"),
    Database = Mongo.Db,
    Server   = Mongo.Server;

var db = new Database(
    "calender",
    new Server("127.0.0.1", 27017),
    {}
);

db.open(function(err, db) {
    var p1 = new Promise();
    db.collection("events", function(err, cursor) {
        cursor.find({}, {}, function(err, docs) {
            var events = [];
            docs.toArray(function(err, event) {
                // console.log(event);
                events.push(event);
            });
            p1.resolve(events);
        });
    });
    var p2 = new Promise();
    db.collection("events", function(err, cursor) {
        cursor.find({}, {}, function(err, docs) {
            var events = [];
            docs.toArray(function(err, event) {
                // console.log(event);
                events.push(event);
            });
            p2.resolve(events);
        });
    });
    var ps = All(p1, p2);
    ps.then(function(result) {
        console.log(result);
    });
});
