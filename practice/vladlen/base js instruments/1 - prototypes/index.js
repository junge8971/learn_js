// Создал обычный обект
const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("hello");
  },
};

// Если обратится к свойству person.call_friend() то получится typeerror так как свойства в обьекте нет
// Но если вызврать person.toString() то получим строку
// Это вызвано тем что все создаваемые объекты в js наследуются от Object, а у него уже есть toString
// Посмотреть родителя можно через свойство __proto__

// альтернативное создание нового объекта
const person_2 = new Object({
  name: "John",
  age: 30,
  greet: function () {
    console.log("hello");
  },
});

// Главному объекту в js присваиваю новую функцию
Object.prototype.sayHello = function () {
  console.log("hello");
};

// теперь если обратится к объектам унаследованным от Object, то можно получить доступ к этой функции
person.sayHello();
person_2.sayHello();

console.log(Object.getPrototypeOf(person));
console.log(Object.getPrototypeOf(person_2));

// Создание объекта с прототипом созданным мной
const lena = Object.create(person_2);
// этот обьект унаследовал и sayHello от глобального объекта и свойства от созданного мной
lena.name = "lena";
console.log(lena.name);
lena.sayHello();

// В js всё объект
const str = "Строчка";
// у объекта str есть методы и мы их можем посмотерть
