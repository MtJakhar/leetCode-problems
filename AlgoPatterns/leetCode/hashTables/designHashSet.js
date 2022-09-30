class MyHashSet {
  // create constructor which has a set/ object
  constructor() {
    this.set = {};
  }
  //   create a add operation
  add(key) {
    this.set[key] = true;
  }

  remove(key) {
    delete this.set[key];
  }

  contains(key) {
    if (this.set[key]) {
      return true;
    } else {
      return false;
    }
  }
}
