let obj = { b: 2, a: 1, c: 3, };

let keys = Object.keys(obj);

newKeys = keys.map(key => key.toUpperCase());

console.log(newKeys)

// initial solution also correct but not common in JS 
//for (let key in keys) {
//    keys[key] = keys[key].toUpperCase();
//}
