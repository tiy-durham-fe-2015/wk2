// TODO: Your job is to write logic that will
// give the user one of three random fortunes
//
// Use the alert("Some text value") function
// to tell the user their fortune.

var fortuneNumber = Math.floor(Math.random() * 3);

if (fortuneNumber === 2) {
  alert("You will be an awesome developer.");
} else if (fortuneNumber === 1) {
  alert("You will be an awesome designer.");
} else {
  alert("Your cat left a special present on your floor.");
}
