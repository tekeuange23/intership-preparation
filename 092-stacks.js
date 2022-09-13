"use strict";

/******************************************************************************************************/
class Node{
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

export class Stack{
  constructor(){
    this.top = null;
    this.length = 0;
  }
  
  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value, this.top);
    this.top = node;

    this.length++;
  }

  pop() {
    if(this.top) {      
      const node = new Node(this.top.value);
      this.top = this.top.next;
      this.length--;
      return node;
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}


/***************************************     MAIN     *************************************************/
const stack = new Stack();
stack.push("udemy -");
stack.push("google -");
stack.push("discord -");

stack.pop();
console.log(stack);
console.log("/**---------------------**/");
