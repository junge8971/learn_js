// Proxy objects
const person = {
  name: "Kek",
  age: 30,
  job: "test",
};

// 2 параметра
// 1 - цель проксирования
// 2 - набор методов (ловушек для объекта)
const proxy_object = new Proxy(person, {
  get(target, prop) {
    // тут можно прописать ещё ствою функциональность
    console.log(`get prop - ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    // логика валидации
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`prop ${prop} ненайден`);
    }
  },
  // проверка наличия свойства
  has(target, prop) {
    return target[prop] !== undefined;
  },
  // удаление свойство
  deleteProperty(target, prop) {
    console.log(`удоляем - ${prop}`);
    delete target[prop];
  },
});

console.log(proxy_object.name);
//proxy_object.kek = 1; пример присвоенния данных к несуществующему свойству, для проверки созданной валидации
console.log(1 in proxy_object); //false так как поля 1 нет
console.log("name" in proxy_object); //true так как поле name
delete proxy_object.name;
console.log(proxy_object); // удалилось поле и получено сообщение в консоле

//
// Proxy function
//

add_prefix = (text) => `prefix ${text}`;
proxy_function = new Proxy(add_prefix, {
  // Обработчик вызова функции
  apply(target, thisArg, args) {
    // тут можно прописать ещё ствою функциональность
    console.log(target, thisArg, args);
    return target.apply(thisArg, args);
  },
});

console.log(proxy_function("kek"));

//
// proxy class
//

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const proxy_class = new Proxy(Person, {
  construct(target, args) {
    console.log(target, args);
    // Инициализированнли новый обьекс с переданными распакованными аргументами
    return new target(...args);
  },
});

const person_proxy = new Person("kek", 1);
console.log(person_proxy);

// пример прокси в прокси
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const proxy_class2 = new Proxy(Person2, {
  construct(target, args) {
    console.log(target, args);
    return new Proxy(new target(...args), {
      get(target, prop) {
        console.log(`get prop - ${prop}`);
        return target[prop];
      },
    });
  },
});

const person_proxy2 = new proxy_class2("kek", 1);
console.log(person_proxy2);
