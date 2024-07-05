const animal = {
  name: "cat",
  age: 10,
  has_tail: true,
};

class Animal {
  //доступно для использования только внутри класса
  static type = "animal";

  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.has_tail = options.has_tail;
  }
  voice() {
    console.log("Здарова");
  }
}

const animal_2 = new Animal({
  name: "cat",
  age: 10,
  has_tail: true,
});
console.log(animal_2);
animal_2.voice();

// пример наследования
class Cat extends Animal {
  // пример расширения функциональности родительского класса
  constructor(options) {
    super(options);
    this.color = options.color;
  }

  // переопределение методов
  voice() {
    console.log("Мяу");
  }

  //getters and setters
  get age_info() {
    return this.age * 7;
  }
  set age_info(value) {
    this.age = value / 7;
  }
}

const cat = new Cat({ name: "cat", age: 1, has_tail: true, color: "white" });
console.log(cat);
// унаследованный метод
cat.voice();
console.log(cat.age_info);
cat.age_info = 88;
console.log(cat.age_info);

// Пример реального использования
class Component {
  constructor(selector) {
    this.$element = document.querySelector(selector);
  }
  hide() {
    this.$element.style.display = "none";
  }

  show() {
    this.$element.style.display = "block";
  }
}

class Box extends Component {
  constructor(options) {
    super(options.selector);

    this.$element.style.width = this.$element.style.height = options.size + "px";
    this.$element.style.background = options.color;
  }
}

const box1 = new Box({
  selector: "#box1",
  size: 100,
  color: "red",
});
