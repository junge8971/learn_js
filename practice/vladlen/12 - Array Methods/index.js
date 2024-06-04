const data = [
  {
    name: "John 1",
    age: 8,
    id: 1,
  },
  {
    name: "John 2",
    age: 33,
    id: 2,
  },
  {
    name: "John 3",
    age: 30,
    id: 3,
  },
];

console.log("for ES5 -----");
// Стандартный for
// ES5
for (let counter = 0; counter < data.length; counter++) {
  console.log(data[counter]);
}

console.log("for of ES6 -----");
// ForOf
// ES6
for (let element of data) {
  console.log(element);
}

console.log("ForEach -----");
// ForEach

//callback
/// element - получает объект на текущей итерации
/// index - индекс текущей итерации. Необязательно
/// data - итерируемый объект. Необязательно
data.forEach((element, index, data) => {
  console.log(element);
  console.log(index);
  console.log(data);
});

console.log("ForEach 2 -----");
// можно записать и так
data.forEach((element) => console.log(element));

console.log("Map -----");
// Map - от ForEach отличается тем, что он что-то возвращает
// Удобство в том, что данные можно трансформировать

//callback
/// element - получает объект на текущей итерации
/// index - индекс текущей итерации. Необязательно
///data - итерируемый объект. Необязательно

const new_data = data.map((element, index, data) => element);
console.log(new_data); // получили изначальный массив

console.log("Map 2-----");
const new_data_with_hello = data.map((element, index, data) => "hello");
console.log(new_data_with_hello); // [ 'hello', 'hello', 'hello' ]

console.log("Filter -----");
//Filter
// Используется для фильтрации. Внутри функции должно возращатся булевое значение

//callback
/// element - получает объект на текущей итерации
/// index - индекс текущей итерации. Необязательно
///data - итерируемый объект. Необязательно

// отфильровали только тех, кому больше 18
const adults = data.filter((element) => element.age >= 18);
console.log(adults);

console.log("Reduce -----");
// Reduce
// Подходит для подсчёта суммы свойст массива. Например просчитать общий возраст

//callback
/// total - счётчик
/// element - получает объект на текущей итерации

// 0 - начальное значение
const total_age_from_data = data.reduce((total, element) => {
  return total + element.age;
}, 0);
console.log(total_age_from_data);

console.log("Find -----");
// Find
// Поиск элемента по указанной логике

//callback
/// element - получает объект на текущей итерации
const john_1_data = data.find((element) => element.name === "John 1");
console.log(john_1_data);

console.log("FindIndex -----");
// FindIndex
// Поиск индекса элемента по указанной логике

//callback
/// element - получает объект на текущей итерации
const john_1_index = data.findIndex((element) => element.name === "John 1");
console.log(john_1_index);

// Всё это можно чейнить
