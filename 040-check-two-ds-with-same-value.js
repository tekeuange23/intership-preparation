// A1 & A2 --> at least one common element
const A1 = [1, 3, 5, 7, 9];
const A2 = [2, 4, 6, 8, 0];
const H1 = {id: "aaa", surname: "bbb", email: "ccc"};
const H2 = {id: "xxx", name: "yyy", email: "ccc", phone: "qqq"};

/***************************************************************************/
/******************************      ARRAY    ******************************/
/***************************************************************************/
// inputs should always be arrays;
// O(n1 * n2) = O(n^2)

function atLeastOneCommonItem(arr1, arr2) {
  for(const e1 of arr1) {
    for(const e2 of arr2) {
      if(e1 === e2) {
        return true;
      }
    }
  }
  return false;
}
console.log(atLeastOneCommonItem(A1, A2));
/***************************************************************************/
// O(n1 * n2) = O(n^2)
function atLeastOneCommonItem2(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

console.log(atLeastOneCommonItem2(A1, A2));

/***************************************************************************/
/******************************     H-TABLE   ******************************/
/***************************************************************************/
// {id: aaa, surname: bbb, email: ccc}  ---  {id: xxx, name: yyy, email: zzz, phone: qqq}
// iterate through the H-Table keys to retrive and check student value
// O(n)
function atLeastOneCommonItem3(arr1, arr2) {
  htable1 = fromArrayToHTable(arr1);

  for(const item of arr2){
    if(htable1[item]){
      return true;
    }
  }

  return false;
}
console.log(atLeastOneCommonItem3(A1, A2));
// console.log(fromArrayToHTable(A1));


/**
 * HELPER 
 * @param {an array} arr 
 * @returns HTable
 * TIME COMPLEXITY: O(n)
 */
function fromArrayToHTable(arr) {
  let hTable = {};
  for (const item of arr) {
    hTable[item] = true;
  }
  return hTable
} 

