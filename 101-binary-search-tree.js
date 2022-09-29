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
    // empty tree
    if(!this.root) {
      return false;
    }
    
    // something in
    let currentNode = this.root;
    let parentNode = null;
    while(true){
      if(value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if(value === currentNode.value) {
        // OPTION 1: no right child 
        if(!currentNode.right) {
          if(parentNode === null) {
            this.root = currentNode.left;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        }
        // OPTION 2: a right child with no left child
        else if(!currentNode.right.left) {
          if(parentNode === null) {
            currentNode.right.left = this.root.left;
            this.root = currentNode.right;
          } else {
            if(currentNode.value < parentNode.value) {
              currentNode.right.left = currentNode.left;
              parentNode.left = currentNode.right;
            } else if(currentNode.value > parentNode.value) {
              currentNode.right.left = currentNode.left;
              parentNode.right = currentNode.right;
            }
          }
        }
        // OPTION 3: a right child with left child
        else if(currentNode.right.left) {
          const { leftmost, leftmostParent } = this.getMostLeft(currentNode.right); 
          
          if(parentNode === null) {
            leftmost.left = currentNode.left;
            leftmostParent.left = leftmost.right;
            leftmost.right = currentNode.right;
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              leftmost.left = currentNode.left;              
              leftmostParent.left = leftmost.right;
              leftmost.right = currentNode.right;
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              leftmost.left = currentNode.left;              
              leftmostParent.left = leftmost.right;
              leftmost.right = currentNode.right;
              parentNode.right = leftmost;
            }
          }
        }
        
        return true;
      }
    }
  }

  getMostLeft(node) {
    let leftmost = node.left;
    let leftmostParent = node;

    while(leftmost?.left) {
      leftmostParent = leftmost;
      leftmost = leftmost.left;
    }
    return { leftmost, leftmostParent };
  }
}


/******************************************************************************************************/
function insertRecusive(bst, value) {}
function lookupRecusive(bst, value) {}
function print(root) {
  if(!root){
    // process.stdout.write(`\n`);
  } 
  else {
    // process.stdout.write(`${root.value} - `);
    console.log(`${root.value} - `);
    print(root.left);
    print(root.right);
  }
}


/***************************************     MAIN     *************************************************/
const bst = new BinarySearchTree();
/**
 *                  OPT 1                               OPT 2                              OPT 3
 *                  *****                               *****                              *****
 *  
 *                   20                                   20                                 20 
 *           ,_______||_______,                   ,_______||_______,                 ,_______||_______,    
 *          10               25                  10               25                 10               25
 *     ,____||____,     ,____||_____,       ,____||____,     ,____||_____,      ,____||____,     ,____||_____,
 *     1               21                             15                29      1         15    21          29
 *                                                                                     ,__||__,          ,__||__,     
 *                                                                                    13                27
 */

[20, 10, 25, 1, 21].forEach(elt => { bst.insert(elt); });                     // OPT 1
// [20, 10, 25, 15, 29].forEach(elt => { bst.insert(elt); });                    // OPT 2
// [20, 10, 25, 1, 15, 21, 29, 13, 27].forEach(elt => { bst.insert(elt); });     // OPT 3

// console.log(JSON.stringify(bst, null, 2));
print(bst.root);
console.log(bst.remove(10));
print(bst.root);
// console.log(JSON.stringify(bst, null, 2));