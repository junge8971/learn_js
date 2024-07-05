// weakset - это тоже что и set, но содержит в себе только объекты
// если объект был удалён сборщиком мусора, то тогда он отчизается из weakset

let object_1 = { name: "exemple_1" };
let object_2 = { name: "exemple_2" };

const weakset = new WeakSet();

weakset.add(object_1);
weakset.add(object_2);

console.log(weakset); // WeakSet { <items unknown> }

console.log(weakset.has(object_1)); // true
console.log(weakset.has(object_2)); // true

object_1 = null;

console.log(weakset.has(object_1)); // false
console.log(weakset.has(object_2)); // true
