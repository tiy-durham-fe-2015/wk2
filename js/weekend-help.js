
var mapExample = [1, 2, 5, 10];

var result = mapExample.forEach(function (item) {
  return item * 2;
});

// Result = [2, 4, 10, 20]
alert(result);






// var words = ['hello', 'goodbye', 'a', 'to', 'class'];

var wordString = 'hello,goodbye,a,to,class';
var words = wordString.split(',');

var largeWords = words.filter(function (word) {
  return word.length >= 3;
});

var someWord = 'Gastronomy and such';
var containsClass = someWord.lastIndexOf('a');

var arr = someWord.split('');
arr[0] = 'M';

// alert(arr.join(''));

//// An alternate way of doing this:
// function wordsGreaterThan2(word) {
//   return word.length >= 3;
// }
//
// var largeWords = words.filter(wordsGreaterThan2);
