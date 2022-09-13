"use strict";

/******************************************************************************************************/
class Node{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  peek() {
    return this.head;
  }

  enqueue(value) {
    const node = new Node(value);

    if(this.tail) {
      this.tail.next = node
    } else {  // tail === head === null
      this.head = node;
    }
    
    this.tail = node;
    this.length++;
  }

  dequeue() {
    if(this.head) {
      this.tail = this.head === this.tail ? null : this.tail;
      
      const node = new Node(this.head.value);
      this.head = this.head.next;
      this.length--;
      return node;
    }
  }
}


/***************************************     MAIN     *************************************************/
const queue = new Queue();
queue.enqueue("udemy");
queue.enqueue("google");
queue.enqueue("discord");

const node = queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
// console.log(node);
// console.log(queue.peek());
console.log(queue);
