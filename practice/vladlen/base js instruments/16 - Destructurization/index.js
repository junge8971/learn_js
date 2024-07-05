function calculate_values(a, b) {
  return [a + b, a - b, a * b, undefined];
}
console.log(calculate_values(10, 16));

// Пример диструктуриазации элементов массива
const [sum, sub] = calculate_values(10, 16);
console.log(sum);
console.log(sub);

// При диструктуризации элемент массива можно пропустить
// При такой записи второй элемент результирующего массива не будет записан в переменную
const [sum_2, , mult] = calculate_values(10, 16);
console.log(sum_2);
console.log(mult);

// Также можно использовать ресть
const [sum_3, ...rest] = calculate_values(10, 16);
console.log(sum_3);
console.log(rest);

// Если значения в результирующем массиве не определены, то можно задавать дефотные значения
// Значение по умолчанию игнорируется, если переданный элемент имеет своё определённое значение
const [, , , some_value = "пусто"] = calculate_values(16, 12);
console.log(some_value);

// Диструктуриазция объектов
const person = {
  name: "John",
  age: 30,
  address: {
    city: "Moscow",
    street: "Lenina",
  },
};
const { name, age, car = "Машины нет", ...rest_of_person } = person;
console.log(name);
console.log(age);
console.log(car);
console.log(rest_of_person);

// если нужно назвать переменную по другому, то
const { name: firstname } = person;
console.log(firstname);

// Чтобы диструктуризировать объект в объекте нужно всеголиш 5 минут в день...
const {
  address: { city, street },
} = person;
console.log(city);
console.log(street);

// Практический пример
function log_person({ name, age }) {
  console.log(name);
  console.log(age);
}
