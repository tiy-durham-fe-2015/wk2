
// say takes a string and calls
// a function by passing it that string
// message is the string
// callbackFunc is the function to call
function say(message, callback) {
  callback(message);
}

function log(message) {
  console.log(message);
}

say('Hello', log);
say('Hello', alert);
















//
