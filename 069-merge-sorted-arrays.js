/**
 * @Exercise : create a function that merge two sorted arrays in parameter and return the final merged array
 * @Example  : mergeSortedArray([0,3,4,31], [4,6,30]) -->  [0, 3, 4, 4, 6, 30, 31]
 */


const add = (arr, elt) => {
  arr.push(elt);
  return arr;
}

/******************************************************************************************************/
/**
 * @TIME_COMPLEXITY :: O(n^2) == quadratic complexity
 * -- the used data structure (pref. linear DS like linkedList or Array) 
 * -- will provide us with 02 methods which are:
 * -- 1. take part of an array :: slice() in js arrays     --> O(n)
 * -- 2. add-ad-the-end()      :: push() in js arrays      --> O(n)
 * @SPACE_COMPLEXITY ::  O(1)   == constant
 * @returns 
 */
function mergeSortedArrayRecursive(arr1, arr2) {
  // base case
  if (arr1.length === 0) { return arr2; } 
  if (arr2.length === 0) { return arr1; } 
  
  // first vs last
  else if(arr1[0] >= arr2[arr2.length - 1]) { 
    return mergeSortedArrayRecursive(arr1.slice(1), add(arr2, arr1[0]));
  }
  else if(arr2[0] >= arr1[arr1.length - 1]) {
    return mergeSortedArrayRecursive(arr2.slice(1), add(arr1, arr2[0]));
  }
  
  // last vs last
  else if(arr1[arr1.length - 1] >= arr2[arr2.length - 1]) {
    return mergeSortedArrayRecursive(arr1.slice(0, arr1.length - 1), add(arr2, arr1[arr1.length - 1]));
  }
  else if(arr2[arr2.length - 1] >= arr1[arr1.length - 1]) {
    return mergeSortedArrayRecursive(arr2.slice(0, arr2.length - 1), add(arr1, arr2[arr2.length - 1]));
  }
}

/******************************************************************************************************/
/**
 * @TIME_COMPLEXITY :: O(n) == linear   ---   but can be turned to O(n^2) due to push() method
 * create an accumulator array and iterate just on time the arrays with two pointers
 * -- the used data structure (pref. linear DS like linkedList or Array) 
 * -- will provide us with 02 methods which are:
 * -- 1. remove-at-the-end() :: pop() in js arrays     --> O(1)
 * -- 2. add-ad-the-end()    :: push() in js arrays    --> O(n)
 * @SPACE_COMPLEXITY :: O(n) == linear
 * @returns 
 */
function mergeSortedArrayIt(arr1, arr2) {
  const acc = [];
  let i = 0,
      j = 0;
      
  if (arr1.length === 0) { return arr2; } 
  if (arr2.length === 0) { return arr1; } 
      
  while(i < arr1.length || j < arr2.length) {
    // console.log(i, j, acc);
    let elt1 = arr1[i],
        elt2 = arr2[j];

    if(i !== arr1.length-1 && elt1 <= elt2) {
      acc.push(elt1);
      i++;
    } 
    else if(j !== arr2.length-1 && elt1 >= elt2) {
      acc.push(elt2);
      j++;
    } else {
      // console.log(i, j, acc);
      elt1 < elt2 ? acc.push(elt1, elt2) : acc.push(elt2, elt1);
      break;
    }
  }
  
  return acc;
}

/***************************************     MAIN     *************************************************/
console.log(mergeSortedArrayRecursive([0,3,4,31], [4,6,30]));
console.log(mergeSortedArrayIt([0,3,4,31], [4,6,30]));
console.log(mergeSortedArrayIt([0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0]));
console.log(mergeSortedArrayIt([0, 0,], []));