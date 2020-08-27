/*
TEAM MEMBERS: 
-Carlos U
-Binbin Mu

Use a T-Diagram to help you Predict the output of what will be printed to
the console.
*/

// 1
//        #1      #2     #5
for (var i = 0; i < 10; i++) {
  // #3
  console.log(i);
  //#4
  i = i + 3;
}
// #6
console.log(i);
// output: *prediction goes here
// 0, 4, 8, 12

// 2
var a = 20;
function abc(list) {
  a = 15;
  console.log(a);
}
console.log(a);
a = [
  [1, 2, 3],
  [5, 10, 20],
];
// output: *prediction goes here
// 20

// 3
function sum(list) {
  var sum = list[0];
  for (var i = 0; i < list.length; i++) {
    sum = sum + list[i];
    console.log(sum);
  }
}
// sum: 1, 2, 4, 7
// i: 0, 1, 2, 3
//index [0] [1] [2]
var c = sum([1, 2, 3]);
console.log(c);
// output: *prediction goes here
// 2, 4, 7, undefined