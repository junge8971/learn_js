let example_object = {
  name: "example",
};
const example_array = [example_object];
example_object = null;

console.log(example_object);
console.log(example_array);

// В данном случае изначальный объект был удалён, но копия осталась в массиве.
// В случае с map у нас уже не полуится получить доступ к данным, у которых ключ был example_object

// Для разрешения таких ситуаций используется weakmap
// Здесь ключами могут быть только объекты
// В наличии методы get, set, delete, has

let example_object_for_weakmap = {
  name: "example",
};

const weakmap = new WeakMap([[example_object_for_weakmap, "example"]]);
console.log(weakmap); //WeakMap { <items unknown> }

// has
console.log(weakmap.has(example_object_for_weakmap));

// get
console.log(weakmap.get(example_object_for_weakmap));

// если example_object_for_weakmap прировнять к null, то значение будет удалено
example_object_for_weakmap = null;
console.log(weakmap.get(example_object_for_weakmap)); //undefined

// Практический пример
const cache = new WeakMap();
function cache_user(user) {
  if (!cache.has(user)) {
    cache.set(user, new Date());
  }
  return cache.get(user);
}

let user_1 = {
  name: "user_1",
};
let user_2 = {
  name: "user_2",
};
cache_user(user_1);
cache_user(user_2);

user_1 = null;

console.log(cache.has(user_1));
console.log(cache.has(user_2));
