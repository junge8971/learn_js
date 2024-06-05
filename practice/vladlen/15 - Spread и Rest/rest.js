// пример

function sum(a, b) {
  return a + b;
}

const numbers = [1, 2, 3, 4];
console.log(sum(...numbers)); // 3
// Получилось 3, так как оставшиеся 2 аргумента игнорируются
// Чтобы исправить поведение, можно использовать рест

function sum_with_rest(a, b, ...rest) {
  // Реализовали сложение ещё оставшихся переданных парметров
  return a + b + rest.reduce((result, num) => result + num, 0);
}
console.log(sum_with_rest(...numbers)); // 10

// при деструктурицации можно получить значения по порядку и в опиратор рест записать оставшиеся
const [a, b, ...rest] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [ 3, 4 ]

// тоже самое для объектов
const obj = {
  first: 1,
  second: 2,
  third: 3,
  fourth: 4,
};
const { first, second, ...other } = obj;
console.log(first); // 1
console.log(second); // 2
console.log(other); // { third: 3, fourth: 4 }
