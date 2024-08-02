/* 
    Array Implementation
    Language: JavaScript
*/

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {}; 
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
 
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
 
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  } 
};

const newArray = new MyArray();

/*
    NOTE:

    1) Why this.data has to be an object?
    - Because in array, we have index and item at the index, when we push the new item into the array, it'll
    assign the index as the key and the item at that index as the value in an object

    2) What is methods?
    - It is the function inside a `Class`

    3) What is shiftItems method?
    - It is a function that helps array delete method can remove any elements in the array and shift the index
*/