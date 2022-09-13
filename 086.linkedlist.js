"use strict";

/******************************************************************************************************/
class Node{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  /**         10  -->  20  -->  /-           30               10  -->  20  -->  30  -->  /-
   *          ^         ^                                      ^                 ^
   *          |         |                                      |                 |
   *        head       tail                 node             head               tail
   * 
   *           INITIAL STATE               INPUT                   FINAL STATE
   */
  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;

    return this;
  }

  prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
    this.length++;

    return this;
  }

  print() {
    let ptr = this.head;

    process.stdout.write(`head --> [ ${ptr.value} ] -->`);
    
    while(ptr = ptr.next) {
      process.stdout.write(` [ ${ptr.value} ] --> `);
    }

    process.stdout.write(" /=\n");
  }

  insert(index, value) {
    // base case
    if(index < 0 || index > this.length) {
      return;
    } else if (index === 0) {
      this.prepend(value);
      return;
    } else if (index === this.length) {
      this.append(value);
      return;
    }

    // traverse the array
    let ptr = this.head;
    for(let i = 0; i < index; i++) {
      if(index !== i+1) {
        ptr = ptr.next;
        continue;
      }
    }

    // insertion
    const node = new Node(value, ptr.next);
    ptr.next = node;
    this.length++;
  }

  traverseToIndex(index) {
    let counter = 0,
        ptr = this.head;

    while(counter !== index) {
      ptr = ptr.next;
      counter++;
    }

    return ptr;
  }

  /**   head --> *    * --> /=                              head --> *  -->  *  -->  /=
  *               \  /
  *                *
  *         INITIAL STATE                                         FINAL STATE
  */
  remove(index) {
    // base case
    if(index < 0 || index >= this.length) {
      return;
    } else if (index === 0) {
      this.head = this.head.next;
    } else {
      let ptr = this.traverseToIndex(index-1);
      const toDelete = ptr.next;
      ptr.next = toDelete.next;
    }

    this.length--;
  }

  reverse() {
    if(!this.head.next) {
      return this.head;
    }

    let first = this.head,
        second = first.next;
    this.tail = this.head;
    while(second) {
      let tmp = second.next;
      second.next = first;
      first = second;
      second = tmp;
    }
    this.head.next = null;
    this.head = first;
  }
}

/**
 * @param {head pointer} list 
 * @returns the reversed associated new list
 */
function reverse(list) {
  let tail = list.head?.next || list.next ;
  
  if(!tail) {
    return new LinkedList(list.head?.value || list.value);
  }
  
  return reverse(tail).append(list.head?.value || list.value);
}

/***************************************     MAIN     *************************************************/
const lnklist = new LinkedList(10);
lnklist.append(20);
lnklist.append(30);
lnklist.prepend(0);
lnklist.insert(1, "XYZ");
lnklist.insert(3, "ABC");
lnklist.remove(0);
lnklist.print();
// reverse
reverse(lnklist).print()
lnklist.reverse();
lnklist.print();
// console.log(JSON.stringify(lnklist.head, null, 2));
