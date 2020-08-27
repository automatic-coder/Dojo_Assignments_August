/*
TEAM MEMBERS: 

Jakeya French
Kahlil Bello
Allen "Dez" Valdez
Sean Prescod

Use a T-Diagram to help you Predict the output of what will be printed to
the console.
*/

// 1
for (var i = 0; i < 10; i++) {
  console.log(i);
  i = i + 3;
}
console.log(i);
// output: 0,4,8,12

//T DIAGRAM
/*
VAR|VALUE
i  | 0 -> 3 -> 4 -> 8 ->12
log| 0 -> 4 -> 8 -> 12


*/

// 2
function abc(list) {
  var a = 20;
  a = 15;
  console.log(a);
}
abc();
console.log(a);
a = [
  [1, 2, 3],
  [5, 10, 20],
];
// output: 20



// 3
function sum(list) {
  sum = list[0];
  // sum = 1
  for (var i = 0; i < list.length; i++) {
    // (var i = 0; i < 3; i++)
    
    sum = sum + list[i];
    console.log(sum);
  }
}
var c = sum([1, 2, 3]);
console.log(c);

// output: 2,4,7, undefined