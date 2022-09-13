/**
 * @Exercise : given a array, what is the first recurring character ?
 * @Example  : [2, 1, 1, 2, 3] -->  1
 * @Example  : [2, 1, 9, 3, 3] -->  3
 * @Example  : [1, 2, 3, 4, 5] -->  undefined
 */

/******************************************************************************************************/
/**
 * @TIME_COMPLEXITY   ::  O(n) == linear
 * @SPACE_COMPLEXITY  ::  O(n) == linear
 */
function firstRecurringCharacter(arr) {
  const exist = {};

  for (const entry of arr) {
    if(exist[entry]) {
      return entry;
    }
    
    exist[entry] = true;
  }

  return undefined;
}

/***************************************     MAIN     *************************************************/
console.log(firstRecurringCharacter([2, 1, 1, 2, 3]));
console.log(firstRecurringCharacter([2, 1, 9, 3, 3]));
console.log(firstRecurringCharacter([1, 2, 3, 4, 5]));