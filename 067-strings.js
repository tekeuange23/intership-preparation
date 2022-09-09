/**
 * @Exercise : create a function which take a string in params and returns the reversed string associated
 * @Example  : reverse("Hello world!") --> "!dlrow olleH"
 */


const isBadInput = str => typeof(str) !== 'string';

const permute = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
}


/** ****************************************************************************************************
 * iterate 02 times with 02 pointer this array :: @PASCAL @TRIANGLE
 * @TIME_COMPLEXITY  :: O(n^2) == quadratic complexity
 * @SPACE_COMPLEXITY :: O(1)   == constant
 * @param {*} str 
 * @returns 
 */
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

/** ****************************************************************************************************
 * create a temp array and iterate just one time the array
 * @TIME_COMPLEXITY  :: O(n) == linear
 * -- the used data structure (pref. linear DS like linkedList or Array) 
 * -- will provide us with 02 methods which are:
 * -- 1. remove-at-the-end() :: pop() in js arrays     --> O(1)
 * -- 2. add-ad-the-end()    :: push() in js arrays    --> O(1)
 * @SPACE_COMPLEXITY :: O(n) == linear
 * @param {*} str 
 * @returns 
 */
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

/******************************************************************************************************/
const reverse3 = (str) => str.split('').reverse().join('');


/***************************************     MAIN     *************************************************/
console.log(reverse1());
console.log(reverse1(10));
console.log(reverse1({length: 100}));
console.log(reverse1(""));
console.log(reverse1("H"));
console.log(reverse1("Hello world!"));
console.log(reverse2("Hello world!"));
console.log(reverse3("Hello world!"));