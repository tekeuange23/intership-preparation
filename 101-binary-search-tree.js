"use strict";

/******************************************************************************************************/
class Node{
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree{
  constructor() {
    this.root = null;
  }

  /**
   * insertions are made on the leafs
   */
  insert(value) {
    const node = new Node(value);

    if(!this.root) {
      this.root = node;
      return this;
    }

    let ptr = this.root;
    while(true){
      if(value <= ptr.value) {
        if(!ptr.left) {
          ptr.left = node;
          return this;
        } 

        ptr = ptr.left;
      } 
      else {
        if(!ptr.right) {
          ptr.right = node;
          return this;
        } 

        ptr = ptr.right;
      }
    }
  }
  
  lookup(value) {
    let ptr = this.root;

    if(!ptr) {
      return false;
    }

    while(ptr){
      if(value === ptr.value) {
        return true;
      }
      else if(value < ptr.value){
        ptr = ptr.left;
      }
      else {
        ptr = ptr.right;
      }
    }
    
    return false;
  }

  remove(value) {
    
  }
}


/******************************************************************************************************/
function insertRecusive(bst, value) {}
function lookupRecusive(bst, value) {}


/***************************************     MAIN     *************************************************/
const bst = new BinarySearchTree();
/**
 *                             10
 *                     ,_______||_______,    
 *                     5               15
 *               ,____||____,     ,____||_____,
 *               1          9    13          20
 */

[10, 5, 1, 9, 15, 13, 20].forEach(elt => {
  bst.insert(elt);
});

console.log(JSON.stringify(bst, null, 2));
console.log(bst.lookup(2));