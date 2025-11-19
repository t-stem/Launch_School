let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(object, array=undefined) {
    let newObj = {};
    if (array === undefined) { // note that array === [] doesn't work since 'array' is just a variable that points to the actual array, so it is never equal to []
        array = Object.keys(object);
    }
    console.log(array);
    // old code: works but simplified by subsequent code
    // for (key in object) {
    //    if (array.includes(key)) {
    //        // console.log(`Added - ${key}: ${object[key]}`)
    //        newObj[key] = object[key];    
    //    }
    // }
    array.forEach(key => newObj[key] = object[key]);
    return newObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }