/* 
    Data Structure: Stack
    Implementation using Array
    Language: JavaScript
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }

  // Return the top element
  peek() {
    return this.array[this.array.legnth - 1];
  }

  // Push the new element to the top of the stack
  push(value) {
    this.array.push(value);
    return this;
  }

  // Remove the top element from the stack
  pop() {
    this.array.pop();
    return this;
  }

  //isEmpty
}

const myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.push('google'));
console.log(myStack.push('ztm'));
console.log(myStack.push('discord'));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
