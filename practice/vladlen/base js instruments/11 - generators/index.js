// для обозначение, что функция является генераторм используется *
function* stringGenerator() {
  yield "hello 1";
  yield "hello 2";
  yield "hello 3";
  yield "hello 4";
  yield "hello 5";
}

const generator = stringGenerator();
console.log(generator); // получили генератор

// чтобы получить элемент из генератора нужно воспользоваться методом next
console.log(generator.next());
// { value: 'hello 1', done: false } получили объект с значением и флагом, обозначающим что есть еще элементы
console.log(generator.next()); //{ value: 'hello 2', done: false }
console.log(generator.next()); //{ value: 'hello 3', done: false }
console.log(generator.next()); // { value: 'hello 4', done: false }
console.log(generator.next()); // { value: 'hello 5', done: false }
console.log(generator.next()); // { value: undefined, done: true }
console.log(generator.next()); // { value: undefined, done: true }

// Свой генератор

const my_generator = {
  gena(n) {
    let counter = 0;
    return {
      next() {
        if (counter < n) {
          return { value: ++counter, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};

const test_my_generator = my_generator.gena(20);

console.log(test_my_generator);
console.log(test_my_generator.next());

// чтобы мой генератор имел возможность быть проитерированным нужно функцию ген заменить на символный тип данных

const my_generator_that_can_be_iterated = {
  [Symbol.iterator](n = 7) {
    let counter = 0;
    return {
      next() {
        if (counter < n) {
          return { value: ++counter, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };
  },
};
for (let num of my_generator_that_can_be_iterated) {
  console.log(num);
}

// но проще всего конечно просто написать функцию
function* my_generator_that_simple(num_of_iterations) {
  for (let counter = 0; counter < num_of_iterations; counter++) {
    yield counter;
  }
}
for (let num of my_generator_that_simple(5)) {
  console.log(num);
}
