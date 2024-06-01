// Гибкая настройка объектов

// create принимает 2 объекта
// 1-ый - это прототип для создаваемого объекта
// 2-ой - это крутое описание свойств объекта, которые можно настраивать с помощью свойству
const person = Object.create(
  {},
  {
    //содержимое - объекты
    name: {
      //Значение свойства
      value: "kek",

      //Описания свойств
      writable: true, // Указывает, что можно изменять значение. Поумолчанию нельзя
      enumerable: true, // Ключ будет отображатся при итерации по объекту. Поумолчанию скрыт
      configurable: true, // Указывает возможность удаления ключа. Поумолчанию нельзя
    },
    birth_year: {
      value: 2000,
      writable: true,
      enumerable: true,
      configurable: true,
    },
    // чтобы автоматически указать возраст из полученного поля года рождения можно воспользоватся getter и setter
    age: {
      // getter
      get() {
        return new Date().getFullYear() - this.birth_year;
      },
      // setter
      set(value) {
        this.birth_year = new Date().getFullYear() - value;
      },
      enumerable: true,
      configurable: true,
    },
  }
);
console.log(person);
console.log(person.age);

// Если вдруг прототип имеет свои свойства, то рекомендуется сдлеющий алгоритм итерации по свойствам

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    const element = person[key];
    console.log(key, element);
  }
}
