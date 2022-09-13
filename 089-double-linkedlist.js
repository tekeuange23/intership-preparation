"use strict";

/******************************************************************************************************/
class Node{
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value, this.tail);
    // console.log(node);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new Node(value, null, this.head);
    this.head.prev = node;
    this.head = node;
    this.length++;
  }

  print() {
    let ptr = this.head;

    process.stdout.write(`head --> [ ${ptr.value} ] -->`);
    
    while(ptr = ptr.next) {
      process.stdout.write(` [ ${ptr.value} ] -->`);
    }

    process.stdout.write(" /=\n");

    // 
    this.printReverse();
  }
  printReverse() {
    let ptr = this.tail;
    const printer = [];
    printer.push(`<-- [ ${ptr.value} ] <-- tail\n`)
    
    while(ptr = ptr.prev) {
      printer.push(`<-- [ ${ptr.value} ] `)
    }

    printer.push("  =\\ ");

    process.stdout.write(printer.reverse().join(""));
  }

  /**  take into consideration negative indexes
   * 
   *  i -->   0   1   2   3   4                   length === 5;             Conversion
   *   list  [x]-[y]-[z]-[k]-[t]                                            i === j + length;
   *  j -->  -5  -4  -3  -2  -1                                             index = j + length + 1; 
   */
  insert(index, value) {
    // conversion
    if(index < 0) {
      index += this.length + 1;
    }

    // base case
    if(index < 0) {
      return;
    } else if (index === 0) {
      this.prepend(value);
      return;
    } else if (index >= this.length) {
      this.append(value);
      return;
    }

    // traverse the array
    let ptr = this.traverseToIndex(index - 1);

    // insertion
    const node = new Node(value, ptr, ptr.next);
    ptr.next.prev = node;
    ptr.next = node;
    this.length++;
  }

  remove(index) {
    // conversion
    if(index < 0) {
      index += this.length;
    }

    // base case
    if(index < 0 || index >= this.length) {
      return;
    } else if (index === 0) {
      this.head = this.head.next;
      this.head.prev =  null
    } else {
      let ptr = this.traverseToIndex(index-1);
      let toRemove = ptr.next;
      const newNext = toRemove.next;
      ptr.next = newNext;

      // if not at the end :: to avoid the NullPointerException 
      if(newNext) {
        newNext.prev = ptr;
      } 

      // tail should also move
      if (index === this.length - 1) {
        this.tail = ptr;
      }
    }

    this.length--;
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
}

/***************************************     MAIN     *************************************************/
const lnklist = new LinkedList(10);
lnklist.append(20);
lnklist.append(30);
lnklist.prepend(0);
lnklist.insert(-4, "XYZ");
lnklist.remove(-3);
lnklist.insert(3, "ABC");
lnklist.print();