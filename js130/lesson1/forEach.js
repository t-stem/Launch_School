function forEach(arr, callback, thisArg) {
  for (let i = 0; i < arr.length; i += 1) {
    callback.call(thisArg, arr[i], i, arr);
  }
} 

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo('Item: ');

// [1, 2, 3].forEach(foo.showItem, foo);
// [1, 2, 3].forEach(foo.showItem);

// forEach([1, 2, 3], foo.showItem, foo);
// forEach([1, 2, 3], foo.showItem);

function displayNext(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
}

forEach([1, 2, 3], displayNext);
