/**
 * @linkedList is better than @hashTable due to the fact that linkedlist do not have a fixed size like hashmap 
 * also, with linkedlist we got ordered data, we can then be sorted as opposed to hashmap 
 * therefore we can deal with large entries without facing the collision problem
 * @linkedList is better than @arrays due to the fact that arrays need a nested or continued memory allocation
 * therefore with linkedlist, addresses are randomly selected in memory which avoid item/indexes shifting when 
 * deleting or inserting element which cost a lot of time.
 */

/******************************************************************************************************/
// pointers
let obj = { a: true };
const ptr = obj;

ptr["hey"] = "hi!";
ptr.a = false;


// linkedList :: 1st --> 2nd --> last --> /-
const block2 = { value: "last", next: null };
const block1 = { value: "2nd", next: block2};
const block0 = { value: "1st", next: block1};
const list =  { 
  value: "1st", 
  next: { 
    value: "2nd", 
    next: { 
      value: "last", 
      next: null 
    }
  }
};

function print(list) {
  if(list) {
    process.stdout.write(`| ${list.value} `);
    // console.log(list.value);
  } else {
    process.stdout.write("|\n");
    return;
  }
  
  print(list.next);
}
/***************************************     MAIN     *************************************************/
console.log(obj, ptr);
print(block0);
print(list);