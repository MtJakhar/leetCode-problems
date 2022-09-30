// hash functions are irreversable and deterministic
// collison when two different inputs return the same result
// seperate chaining is the managing of collsions can be done by puting values in an array

// create a hash fucntion
const hash = (key, size) => {
  let hashedKey = 0;

  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i);
  }

  return hashedKey % size;
};

class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map();
    }
  }

  //   insert is the same as put
  insert(key, value) {
    let idx = hash(key, this.size);
    this.buckets[idx].set(key, value);
  }

  remove() {
    let idx = hash(key, this.size);
    let deleted = this.buckets[idx].get(key);
    this.buckets[idx].delete(key);
    return deleted;
  }

  //   same as get
  search(key) {
    let idx = hash(key, this.size);
    return this.buckets[idx].get(key);
  }
}

const hashTable = new HashTable();

hashTable.insert("serena", "moon");
hashTable.insert("amy", "mercurt");
hashTable.insert("rei", "mars");
hashTable.insert("mina", "venus");
hashTable.insert("darien", "tuxedo mask");

hashTable.search("rei");
hashTable.search("lita");
hashTable.search("serena");

hashTable.remove("darien");
hashTable.remove("mina");
