// wrapper

const with_default_value = (target, value = 0) => {
  return new Proxy(target, {
    get(object, prop) {
      // Возвращаем дефолное значение, если свойства в объекте нет
      return prop in object ? object[prop] : value;
    },
  });
};

const test_with_default_value = with_default_value(
  {
    age: 20,
    hieght: 30,
  },
  0
);

console.log(test_with_default_value.wight); // Получили ноль, такак свойства

// hidden properties
const with_hidden_properties = (target, prefix = "_") => {
  return new Proxy(target, {
    // Теперь при проверке наличия свойства у объекта, свойства с _ будут иметь false
    has: (object, prop) => prop in object && !prop.startsWith(prefix),
    // Получение массива из колючей объекта с фильром на отсутсвие ключей с _
    ownKeys: (object) => Reflect.ownKeys(object).filter((key) => !key.startsWith(prefix)),
    get: (object, prop, receiver) => (prop in receiver ? object[prop] : undefined),
  });
};

const test_with_hidden_properties = with_hidden_properties({ kek: "name", _lol: 1 });

console.log(test_with_hidden_properties._lol); // получили undefined
console.log("_lol" in test_with_hidden_properties); // получили false

// optimization
const some_data = [
  { field_1: 1, field_2: 2 },
  { field_1: 3, field_2: 4 },
];

// Для поиска элемента с нужным занчением поля есть метод find
console.log(some_data.find((data) => data.field_1 === 1));
// этот метод итерируется по массиву и делает проверку. В случае если массив очень большой, данный метод займет O(n) время
// c помощью прокси можно создать оптимизационную обёртку для массивов

const IndexedArray = new Proxy(Array, {
  construct(target, [args]) {
    // Для того чтобы создать карту индексов при формировании массива мы обращаемся к каждому переданному аргументу и записываем значение свойства элемента в карту как ключ, а сам элемент записываем как значение
    const index = {};
    args.forEach((element) => {
      index[element.field_1] = element;
    });
    // Теперь пришем логику работы с новым массивом и картой индексов
    return new Proxy(new target(...args), {
      get(object, property) {
        // тут что-то невразумительное на 22 минуте начинается, так что похуй
      },
    });
  },
});

const some_data_in_indexed_array = new IndexedArray([
  { field_1: 1, field_2: 2 },
  { field_1: 3, field_2: 4 },
]);
