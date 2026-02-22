/*

Your task is to write a CircularBuffer class that implements a circular buffer for arbitrary objects. 
The class should obtain the buffer size with an argument provided to the constructor, and should provide the following methods:

put to add an object to the buffer
get to remove (and return) the oldest object in the buffer. It should return null if the buffer is empty.
You may assume that none of the values stored in the buffer are null (however, null may be used to designate empty spots in the buffer).

Examples:

*/

class CircularBuffer {
  constructor(length) {
    this.length = length;
    this.buffer = new Array(length);
    this.buffer.fill(null);
    this.oldestIndexQueue = [];
  }

  isFull() {
    return this.buffer.every(element => element !== null);
  }

  isEmpty() {
    return this.buffer.every(element => element === null);
  }

  moveOldestToLatest() {
    this.oldestIndexQueue.push(this.oldestIndexQueue.shift());
  }

  get() {
    if (this.isEmpty()) return null;
    let removedElementArr = this.buffer.splice(this.oldestIndexQueue[0], 1, null);
    this.oldestIndexQueue.shift();
    return removedElementArr[0];
  }

  put(newObj) {
    if (this.isFull()) {
      this.buffer.splice(this.oldestIndexQueue[0], 1, newObj);
      this.moveOldestToLatest();
    } else {
      let firstEmptyIndex = this.buffer.indexOf(null);
      this.buffer[firstEmptyIndex] = newObj;
      this.oldestIndexQueue.push(firstEmptyIndex);
    }
  }
}

let buffer = new CircularBuffer(3);
console.log(buffer.get() === null);

buffer.put(1);
buffer.put(2);
console.log(buffer.get() === 1);

buffer.put(3);
buffer.put(4);
console.log(buffer.get() === 2);

buffer.put(5);
buffer.put(6);
buffer.put(7);
console.log(buffer.get() === 5);
console.log(buffer.get() === 6);
console.log(buffer.get() === 7);
console.log(buffer.get() === null);

let anotherbuffer = new CircularBuffer(4);
console.log(anotherbuffer.get() === null);

anotherbuffer.put(1)
anotherbuffer.put(2)
console.log(anotherbuffer.get() === 1);

anotherbuffer.put(3)
anotherbuffer.put(4)
console.log(anotherbuffer.get() === 2);

anotherbuffer.put(5)
anotherbuffer.put(6)
anotherbuffer.put(7)
console.log(anotherbuffer.get() === 4);
console.log(anotherbuffer.get() === 5);
console.log(anotherbuffer.get() === 6);
console.log(anotherbuffer.get() === 7);
console.log(anotherbuffer.get() === null);