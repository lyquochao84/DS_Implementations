/* 
    Implementation of Hash Tables
    Language: JavaScript
*/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // Hash Function - Private property
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] == key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  // Print all the keys in the hash table without collision
  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let keysArray = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        } 
        else {
          keysArray.push(this.data[i][0]);
        }
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.keys();

/* 
    NOTE:
    1) What is the parameter (size) in constructor?
    - Size is the space (shelves from example) in memory. We receive (size) as parameter because we want to define how many space in memory we can use for our hash table
    - This array is going to hold information for us
    - Ex: [['grapes', 10000]]

    2) Why do we put the underscore with hash method: _hash()?
    - In Javascript, this is a developer stander. Although, we can still access the _hash() method outside of the class
    But, in the Javascript developers standard, the underscore method meaning "private property" (which we can't access outside of the class) since this is our hash fucntion

    3) Why do we use charCodeAt(..) in the _hash() method?
    - Because for the key, we want to convert all data types into integer to compute in the formula
*/
