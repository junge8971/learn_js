//В js есть возможность представления объектов с помощью массива массивов
const some_data = [
  ["name", "John"],
  ["age", 30],
];

// Чтобы получить объект из этой записи можно обраться к методу fromEntries у Object
const some_data_in_object = Object.fromEntries(some_data);
console.log(some_data_in_object); //{ name: 'John', age: 30 }

// Так же можно преобразовать обычный объект в массив массивов
console.log(Object.entries(some_data_in_object)); // [ [ 'name', 'John' ], [ 'age', 30 ] ]

// map
// в map ключём может быть не только строка, а вообще любой объект
// map можно проинициализировать с ипспользованием массива массивов
const map = new Map(some_data);
console.log(map); //Map(2) { 'name' => 'John', 'age' => 30 }

// Получать значения можно с помощью метода get
console.log(map.get("name")); //

// Чтобы добаить новую пару ключь: значение, можно использовать метод set
// set можно чейнить
// В качестве ключа можно передавать Nan
map.set("job", "mac").set(some_data_in_object, "value_of_object").set(NaN, "nan");
console.log(map);
/*
Map(5) {
  'name' => 'John',
  'age' => 30,
  'job' => 'mac',
  { name: 'John', age: 30 } => 'value_of_object',
  NaN => 'nan'
}
*/

//Чтобы удалить пару ключь: значение, можно использовать метод delete
// метод возращает true или false, в зависимости от того, был ли такой ключь на момент удаления
map.delete(NaN); // true
console.log(map);

// Чтобы проверить наличия ключа используется метод has
console.log(map.has(NaN)); // false

// Чтобы получить количество ключей, используется свойство size
console.log(map.size);

// удаление всех ключей в карте происходит с помощью метода clear
//map.clear();
console.log(map); // Map(0) {}

// Пример итерирования по карте
for (let [key, value] of map) {
  console.log(key);
  console.log(value);
}

// Итерация только по значениям
for (let value of map.values()) {
  console.log(value);
}

// итерация только по ключам
for (let key of map.keys()) {
  console.log(key);
}

//map ForEach
map.forEach((value, key, map) => {
  console.log(value);
  console.log(key);
  console.log(map);
});

// Создание массива из карты с помощью спреда
const array_from_map_with_spread = [...map];
console.log(array_from_map_with_spread);

// Создание массива из карты с помощью from
const array_from_map = Array.from(map);
console.log(array_from_map);

// Создание объекта из карты
// обьекты приводятся к строке
const object_from_map = Object.fromEntries(map.entries());
console.log(object_from_map);

// Практический пример
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

const visits = new Map();
users.forEach((value) =>
  visits.set(value, new Date(new Date().getTime() + Math.random() * 300))
);

console.log(visits);
console.log(users);

const last_visit = (user) => visits.get(user);
console.log(last_visit(users[0]));
