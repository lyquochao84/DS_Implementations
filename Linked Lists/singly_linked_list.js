/* 
    Singly Linked Lists Implementation
    Language: JavaScript
    Example: 10 --> 5 --> 16
*/

// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
};

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // Add new node at the end of the linked list (tail)
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Add new node at the beginning of the linked list (head)
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
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
    const holdingPointer = trackNode.next;
    trackNode.next = newNode;
    newNode.next = holdingPointer;
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
    //Check params
    const trackNode = this.traverseToIndex(index - 1);
    const deleteNode = trackNode.next;
    trackNode.next = deleteNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let firstNode = this.head;
    this.tail = this.head;
    let followerNode = firstNode.next;

    while (followerNode) {
      const temp = followerNode.next;
      followerNode.next = firstNode;
      firstNode = followerNode;
      followerNode = temp;
    }

    this.head.next = null;
    this.head = firstNode;
    return this.printList();
  }
}

const mySinglyLinkedList = new SinglyLinkedList(10);
mySinglyLinkedList.append(5);
mySinglyLinkedList.append(16);
mySinglyLinkedList.prepend(1);
mySinglyLinkedList.insert(2, 99);   // Example: 10 --> 99 --> 5 --> 16
mySinglyLinkedList.insert(20, 88);  // Example: 10 --> 99 --> 5 --> 16 --> 88

/* 
    NOTE:
    1) Why in the constructor(value), this.tail = this.head in linked list?
    - Because the constructor method is our define class method, to create a linked list, first we must have the first node
    contain value and the pointer to the next memory address. When we have the first node, it means that the head and the tail
    of the linked list are also the first node

    2) What is the traverseToIndex method in the class LinkedList?
    - This method is uses to traverse the linked list and helps the insert() method can insert the new node in any position
    by return the node that is before the position we want to add the new node
    Example: We want to insert node at index 2, this method return the node at index 1
*/


