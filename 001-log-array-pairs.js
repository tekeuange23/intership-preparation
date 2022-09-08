// log all pairs of array
let array = [0,1,2,3,4,5];

function logArrayPairs(arr) {
  for(i of arr){
    for(j of arr){
      console.log(i ,j);
    }
    console.log("|---|");
  }
}

logArrayPairs(array);