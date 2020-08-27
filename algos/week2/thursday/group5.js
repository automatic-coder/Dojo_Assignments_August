/**
 * 
 * MEMBERS: Stephen Lebel, Ling
 * 
 * Given an array of Integers move all the values of zero to the end of the array while keeping the order of the rest of the numbers
 * 
 * input: [2,5,0,7,0,2,0,8,7]
 * output: [2,5,7,2,8,7,0,0,0]
 * 
 */

 function moveZeros(arr){
        function movezeros(Arr)
        for (var i=0; i<arr.length; i++) {
            if (arr[i] === 0) {
               
            }
        }
        

 }
console.log(moveZeros[2,5,0,7,0,2,0,8,7])


 // Function which pushes all zeros to end of an array. 
 static void pushZerosToEnd(int arr[], int n) 
 { 
     int count = 0;  // Count of non-zero elements 

     // Traverse the array. If element encountered is 
     // non-zero, then replace the element at index 'count' 
     // with this element 
     for (int i = 0; i < n; i++) 
         if (arr[i] != 0) 
             arr[count++] = arr[i]; // here count is 
                                    // incremented 

     // Now all non-zero elements have been shifted to 
     // front and 'count' is set as index of first 0. 
     // Make all elements 0 from count to end. 
     while (count < n) 
         arr[count++] = 0;