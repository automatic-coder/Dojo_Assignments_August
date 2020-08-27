/**
 * MEMBERS:
 *Jeffrey Yi
 *Kristen San Martin
 * Shawn Converse
 * Binbin Mu
 *
 * Given in a array, return the same array in sorted order from least to greatest.
 *
 * input: [3,7,8,9,4,5,1,2,6]
 * output:[1,2,3,4,5,6,7,8,9]
 */

function sort(arr) {
    var unsorted = true;
    let temp = 0;
    let swapped = false;
    while (unsorted) {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            temp = 0;
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp; 
                swapped = true;                       
            }
        }
        if (swapped == false) {
            unsorted = false;
        }
    }
   return arr;
}

console.log(sort([3, 7, 8, 9, 4, 5, 1, 2, 6]));


//agreed nice                                                           
// So Steven made a really good point regarding efficiency, which is something
// we would need to consider once we are working in the field.
// I modified Khalil's code to fit that efficiency

var largeArr = [];
for (let i = 100; i > 0; i--) {
    largeArr.push(i);
}
function sort2(arr) {
    for (var i = arr.length; i >= 0; i--) {
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp2 = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp2;
            } //end if statement
        } //end inner for
    } //end outer for
    return arr;
}
console.log(sort2(largeArr));