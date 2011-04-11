var Mongo    = require("mongodb"),
    Database = Mongo.Db,
    Server   = Mongo.Server,
    funk     = require("funk")();

funk.set("events", []);

var db = new Database(
    "calender",
    new Server("127.0.0.1", 27017),
    {}
);

db.open(function(err, db) {
    db.collection("events", function(err, cursor) {
        cursor.find({}, {}, function(err, docs) {
            docs.toArray(funk.add(function(err, data) {
                this.events.push(data);
            }));
        });
    });
    db.collection("events", function(err, cursor) {
        cursor.find({}, {}, function(err, docs) {
            docs.toArray(funk.add(function(err, data) {
                this.events.push(data);
            }));
        });
    });
    funk.parallel(function() {
        console.log(this.events);
        db.close();
    });
});
