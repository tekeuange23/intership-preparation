/******************************************************************************************************/
/******************************************************************************************************/
const add = (arr, elt) => {
  arr.push(elt);
  return arr;
}

function mergeSortedArrayRec(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  } 
  else if (arr2.length === 0) {
    return arr1;
  } 
  
  // first vs last
  else if(arr1[0] >= arr2[arr2.length - 1]) { 
    return mergeSortedArrayRec(arr1.slice(1), add(arr2, arr1[0]));
  }
  else if(arr2[0] >= arr1[arr1.length - 1]) {
    return mergeSortedArrayRec(arr2.slice(1), add(arr1, arr2[0]));
  }

  // last vs last
  else if(arr1[arr1.length - 1] >= arr2[arr2.length - 1]) {
    return mergeSortedArrayRec(arr1.slice(0, arr1.length - 1), add(arr2, arr1[arr1.length - 1]));
  }
  else if(arr2[arr2.length - 1] >= arr1[arr1.length - 1]) {
    return mergeSortedArrayRec(arr2.slice(0, arr2.length - 1), add(arr1, arr2[arr2.length - 1]));
  }
}

/******************************************************************************************************/
/******************************************************************************************************/
function mergeSortedArrayIt(arr1, arr2) {
  const acc = [];
  let i = 0, j = 0;

  if (arr1.length === 0) { return arr2; } 
  else if (arr2.length === 0) { return arr1; } 

  while(i < arr1.length || j < arr2.length) {
    let elt1 = arr1[i];
    let elt2 = arr2[j];

    if(elt1 < elt2) {
      acc.push(elt1);
      i++;
    } else {
      acc.push(elt2);
      j++
    }
  }

  return acc;
}



/******************************************************************************************************/
console.log(mergeSortedArrayRec([0,3,4,31], [4,6,30]));
// console.log(mergeSortedArrayIt([0,3,4,31], [4,6,30]));

console.log([1,2,3,2].push(20));