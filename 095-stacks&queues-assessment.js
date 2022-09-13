/**
 * @Exercise : Implement a Queue using Stacks
 * @Principle https://leetcode.com/problems/implement-queue-using-stacks/solution/
 */

/******************************************************************************************************/
import { Stack } from "./092-stacks.js";

class Queue{
  constructor(){
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
  }
  
  peek() {
    while(!this.stackOne.isEmpty()) {
      this.stackTwo.push(this.stackOne.pop().value);
    }

    const peek = this.stackTwo.peek()

    while(!this.stackTwo.isEmpty()) {
      this.stackOne.push(this.stackTwo.pop().value);
    }

    return peek;
  }

  enqueue(value) {
    while(!this.stackOne.isEmpty()) {
      this.stackTwo.push(this.stackOne.pop().value);
    }

    this.stackOne.push(value);

    while(!this.stackTwo.isEmpty()) {
      this.stackOne.push(this.stackTwo.pop().value);
    }
  }

  dequeue() {
    return this.stackOne.pop();
  }

  isEmpty() {
    return this.stackOne.isEmpty();
  }
}


/***************************************     MAIN     *************************************************/
const queue = new Queue();
queue.enqueue("slack");
queue.enqueue("udemy");
queue.enqueue("google");
queue.enqueue("discord");
queue.enqueue("facebook");

const node = queue.dequeue();
queue.dequeue();

// console.log(node);
// console.log(queue.peek());
console.log(queue);