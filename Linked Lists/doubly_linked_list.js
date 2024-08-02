/* 
    Doubly Linked Lists Implementation
    Language: JavaScript
    Example: 10 --> 5 --> 16
*/

// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
};

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Add new node at the end of the linked list (tail)
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Add new node at the beginning of the linked list (head)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  // Print the linked list as array
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  // Insert new node into any position 
  insert(index, value) {
    //Check params if the value we wants to add in the end of the list or not
    if (index >= this.length) {
      return this.append(value);
    }

    //Check params if the value we wants to add at the beginning of the list or not
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    const newNode = new Node(value);
    const trackNode = this.traverseToIndex(index - 1);
    const follower = trackNode.next;
    trackNode.next = newNode;
    newNode.prev = trackNode;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  // Traversal 
  traverseToIndex(index) {
    //Check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // Remove node
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 99);   // Example: 10 --> 99 --> 5 --> 16
myDoublyLinkedList.insert(20, 88);  // Example: 10 --> 99 --> 5 --> 16 --> 88


