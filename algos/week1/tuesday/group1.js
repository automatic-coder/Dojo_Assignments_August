/*
TEAM MEMBERS: Nathan Roe, Merton Myers, Jason Ford

Use a T-Diagram to help you Predict the output of what will be printed to
the console.
*/    //                                                              T diagram
      //                                                          var  0       value 0
                                                                  var  0       value 4
                                                                  var  4       value 8
                                                                  var  8       value 12
                                                                  var  12      value 12
// 1
for (var i = 0; i < 10; i++) {
    console.log(i);
  i = i + 3;
}
console.log(i);
// output: 0, 4, 8, 12                

// 2
//                                                                     T diagram
//                                                                var           value
  //                                                              a               20

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
// output: 20
 //                                                                   T diagram
   //                                                             var        value
     //                                                           0          0 < 3
       //                                                         1          1 + 0
         //                                                       1           2
                                                                          
// 3
function sum(list) {
  sum = list[0];
  for (var i = 0; i < list.length; i++) {
    sum = sum + list[i];
    console.log(sum);
  }
}
c = sum([1, 2, 3]);
console.log(c);

// output: 2  
