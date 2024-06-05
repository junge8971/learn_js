const example_data_1 = ["city_1", "city_2", "city_3", "city_4", "city_5"];
const example_data_2 = ["city_6", "city_7", "city_8", "city_9", "city_10"];

// Просто передача массива в функци.
console.log(example_data_1);

// Элементы массива были распакованы и на выходе получся набор строк
console.log(...example_data_1); // city_1 city_2 city_3 city_4 city_5

// Клонирования массив
const new_data = [...example_data_1];
console.log(new_data); // [ 'city_1', 'city_2', 'city_3', 'city_4', 'city_5' ]

// Слияние массивов
// Порядок в результирующем массиве сохраняется
const merged_data = [...example_data_1, ...example_data_2];
console.log(merged_data);

// Старый метод слияния
const merged_data_old = example_data_1.concat(example_data_2);
console.log(merged_data_old);

// spread для объектов

const cityes_1 = {
  city_1: 1,
  city_2: 30,
};
const cityes_2 = {
  city_3: 4,
  city_4: 35,
};
// Просто объект распаковать нельзя
//console.log(...cityes_1);  Spread syntax requires ...iterable[Symbol.iterator] to be a function

//Объект можно распаковать в объект
console.log({ ...cityes_1 });
// Слияние объектов
// В случае, если были у объектов одинаковые ключи, то будет получено значение, которое последние вошло в распаковку
console.log({ ...cityes_1, ...cityes_2 });

// Практическое применение

// Поиск максимального числа
console.log(Math.max(5, 37, 45, 20)); //45
//Чтобы это сделать с массивом, то можно распаковать его элементы
console.log(Math.max(...[5, 37, 45, 20])); //45
