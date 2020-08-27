/**
 * 
 * MEMBERS: 
 *Xue Vang
 *Micheal Ross
 *Raoul Soumah
 * Given an array of Integers move all the values of zero to the end of the array while keeping the order of the rest of the numbers
 * 
 * input: [2,5,0,7,0,2,0,8,7]
 * output: [2,5,7,2,8,7,0,0,0]
 * 
 */

function moveZeros(arr){
    var newarr = [];
    for(var i=0; i<arr.length; i++){
      if(arr[i]!==0){
        newarr.push(arr[i]);
      }
      }
    for(var i=0; i<arr.length; i++){
      if(arr[i]==0){
        newarr.push(arr[i]);
      }
    }
    return newarr;
  }
  console.log(moveZeros([2,5,0,7,0,2,0,8,7]));






//#############################################################################
  function moveZeros(arr){
   var tempArr=[];
    for (var i = 0; i < arr.length; i ++){
      if(arr[i]===0){
        tempArr.push(arr[i]);
        arr.pop(arr[i]);
      }
    }
    
    arr.push(tempArr);
    console.log(arr);
    return arr;
 }
 
 console.log(moveZeros[2,5,0,7,0,2,0,8,7])

 //############################################### 
 function moveZeros(arr){
   var tempArr = [];
   for(var i = 0; i<arr.length; i++){
     if(arr[i]===0){
       tempArr.push(arr[i])
     }
   }
   console.log(tempArr);
 
 
   function compareZero(arr) {
      return arr > 0
     }
     
   arr = arr.filter(compareZero);
   console.log(arr);
 
   arr.push(tempArr);
   console.log(arr);
 }
 
 var myArr = [2,5,0,7,0,2,0,8,7];
 moveZeros(myArr);