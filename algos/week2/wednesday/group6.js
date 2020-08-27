/**
 *
 *
 * MEMBERS
 * Stephen Lebel
 * Luis Cardona
 * Shawn Converse
 *
 * Given an array of positive integers and a target number, return a pair of numbers that sum up to the target number. You may return this pair in an array.
 *
 * input: [1,3,7,8,5,2], 12
 * output: [7,5]
 */

function twoNumSum(arr, target) {
//loop nested in loop
//if stament check 12
    var newarr = [];
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]+ arr[j] == target){
                newarr.push(arr[i])
                newarr.push(arr[j])
                return newarr;
            }
        }
    }
    return -1;
}

twoNumSum([1, 3, 7, 8, 5, 2], 12);

