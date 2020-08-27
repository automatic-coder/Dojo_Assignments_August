/**
 *
 * MEMBERS: Alex Lee,Stephen Lebel, Steven "Learning is hard" Wittkopf
 *
 * Given an array of integers values, return an array with the same values in reverse order
 * input: [5,2,4,3,1,6]
 * output: [6,1,3,4,2,5]
 */

function reverseNewArr(arr) {
  var temp = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i]);
  }
  return temp;
}

function reverseInPlace(arr) {
  let temp, last, mid;
  last = arr.length - 1;
  mid = Math.floor(arr.length / 2);
  for (var i = 0; i < mid; i++) {
    // store: store the variable you want to overwrite first
    // overwrite: overwrite the variable you stores with the one you are swapping
    // restore: overwrite the swapped variable with the value you stored
    // item at index i, and item at index (last - i)
    temp = arr[i];
    arr[i] = arr[last - i];
    arr[last - i] = temp;
  }
  return arr;
//   return arr.reverse();
}

let arr = [5, 2, 4, 3, 1, 6];
console.log(reverseNewArr(arr));
arr = [5, 2, 4, 3, 1, 6];
console.log(reverseInPlace(arr));

function isPrime(n, primes) {
   let root = Math.sqrt(n);
   if (Number.isInteger(root)) {
      return false;
   }
   for (let i = 1; primes[i] < root; i++) {
      if (n % primes[i] == 0) {
      return false;
      }
   }
   return true;
}

function generatePrimes(limit) {
   if (limit < 2) {
      return [];
   }
   else if (limit < 3){
      return [2];
   }
   let primes = [2, 3];
   for (let i = 5, k = 2; i <= limit; i += k, k ^= 6){
      if (isPrime(i, primes)){
         primes.push(i);
      }
   }
   return primes;
}

let primes = generatePrimes(1e7);
console.log(primes);
// output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, …]
// apparently: 9999991 is prime