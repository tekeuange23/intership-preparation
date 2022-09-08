// create a function which take a string in params and
// returns the reversed string associated
// reverse("Hello world!") --> "!dlrow olleH"

const isBadInput = str => typeof(str) !== 'string';

const permute = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
}


/********************************************************************* */
// reverse1 ("str")
// ['s', 't', 'r']
// iterate 02 times with 02 pointer this array 
// TIME : O(n^2) == quadratic complexity
// SPACE: O(1)   == constant
/********************************************************************* */
function reverse1(str) {
  if (isBadInput(str)) {
    console.log("Bad input ::");
    return str;
  }

  let arrayStr = str.split('');
  
  for(let i=0; i<arrayStr.length; i++){
    for(let j=i; j<arrayStr.length; j++){
      if(i != j){
        let temp = arrayStr[i];
        arrayStr[i] = arrayStr[j];
        arrayStr[j] = temp;
        // permute(arrayStr[i], arrayStr[j]);
      }
    }
  }
  
  return arrayStr.join('');
}



/********************************************************************* */
// reverse2 ("str")
// ['s', 't', 'r']
// create a temp array 
// iterate just on time the array
// TIME : O(n) == linear
// -- the used data structure (pref. linear DS like linkedList or Array) 
// -- will provide us with 02 methods which are:
// -- 1. remove-at-the-end() :: pop() in js arrays     --> O(1)
// -- 2. add-ad-the-end()    :: push() in js arrays    --> O(1)
// SPACE: O(n) == linear
/********************************************************************* */
function reverse2(str) {
  if (isBadInput(str)) {
    console.log("Bad input ::");
    return str;
  }
  
  let temp = [];
  
  for (let i = str.length; i >= 0; i--) {
    temp.push(str[i]);
  }
  
  return temp.join('');
}

/********************************************************************* */
function reverse3(str) {
  if (isBadInput(str)) {
    console.log("Bad input ::");
    return str;
  }

  return str.split('').reverse().join('');
}
/********************************************************************* */

console.log(reverse1());
console.log(reverse1(10));
console.log(reverse1({length: 100}));
console.log(reverse1(""));
console.log(reverse1("H"));
console.log(reverse1("Hello world!"));
console.log(reverse2("Hello world!"));
console.log(reverse3("Hello world!"));