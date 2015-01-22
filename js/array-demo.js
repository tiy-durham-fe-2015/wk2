
var ages = [3, 4, 2, 5, 7];
var ageSum = 0;

function forEach(arr, callback) {
  for (var i = 0; i < arr.length; ++i) {
    callback(arr[i]);
  }
}

forEach(ages, function (age) {
  ageSum = ageSum + age;
});

// ages.forEach(function (age) {
//   ageSum = ageSum + age;
// });

// for (var i = 0; i < ages.length; ++i) {
//   ageSum = ageSum + ages[i];
//   //console.log(ages[i]);
// }





console.log(ageSum / ages.length);
