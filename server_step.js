//npm install step
var fs = require("fs"),
    Step = require("step"),
    hh = "",
    ww = "";


Step(
  // Loads two files in parallel
  function readfiles(){
      var self = this;
      fs.readFile("files/a.txt", this.parallel() );
      fs.readFile("files/b.txt", this.parallel() );
  },
  // Show the result when done
  function showStuff(err, data_a, data_b) {
      hh = data_a;
      ww = data_b;
      console.log("Text: '" + hh + " " + ww + "'");    
  }
)