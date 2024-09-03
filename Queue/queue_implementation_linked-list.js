/* 
    Data Structure: Queue
    Implementation using Linked List
    Language: JavaScript
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Return this first element in the queue
  peek() {
    return this.first;
  }

  // Add the new element to the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } 
    else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // Remove the element from the queue
  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
        this.last = null;
    }
    // const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }

  //isEmpty;
}

const myQueue = new Queue();
console.log(myQueue.enqueue("Joy"));
console.log(myQueue.enqueue("Matt"));
console.log(myQueue.enqueue("Pavel"));
console.log(myQueue.enqueue("Samir"));
console.log(myQueue.dequeue());
console.log(myQueue.peek());
console.log(myQueue);
