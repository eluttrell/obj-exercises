var histogram = function(str) {
  var tally = {};
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    var x = str[i];
    if (x.match(/[a-z]/i) !== null) {
      if (x in tally === false) {
        tally[x] = 1;
      }
      else if (x in tally === true) {
        tally[x] += 1;
      }
    }
  }
  console.log(tally);
};

histogram('The rain in spain! falls mainly on the plain.');
