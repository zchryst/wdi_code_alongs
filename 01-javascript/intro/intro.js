console.log('introduction to ecmascript')
  ;

if (5 > 4) {
  console.log('that is sooooooo correct');
}

var fullSlackRule = true;
if (fullSlackRule) {
  console.log('yay full slack');
}

var name = '';
if (name) {
  console.log('sup g-unit');
}

//

var points = 140;
if (points) {
  console.log('you have ' + points + ' points');
}

var firstName;
if (firstName) {
  console.log('your first name is ' + firstName);
}


var year = new Date().getFullYear();
if (year < 2017) {
  console.log('Whoa! Blast from the past!');
} else if (year === 2017) {
  console.log("I'm in the present!");
} else {
  console.log('Greetings from the future!');
}
