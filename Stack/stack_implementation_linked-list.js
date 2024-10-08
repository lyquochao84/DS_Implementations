/* 
    Data Structure: Stack
    Implementation using Linked List
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
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // Return the top element
  peek() {
    return this.top;
  }

  // Push the new element to the top of the stack
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    }
    else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  // Remove the top element from the stack
  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }
    
    this.top = this.top.next;
    this.length--;
    return this;
  }

  //isEmpty
}

const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("google2"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());

