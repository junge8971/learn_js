const my_number = 1;

// Получение данных из локального хранилища
console.log(localStorage.getItem("number")); // null так как пусто

// Запись в локальное хранилище
// Локальное хранилище может хранить в себе только строки
localStorage.setItem("number", my_number);
console.log(localStorage.getItem("number")); // '1'

// Удаление данных из локального хранилища
localStorage.removeItem("number");

// Очистка локального хранилища
localStorage.clear();

// Объекты в локальном хранилище
const exemple_object = {
  name: "John",
  age: 30,
};
// При помещении объекта в локальное хранилище объект конвертируется в строку
localStorage.setItem("key", exemple_object); //[object Object]

// Чтобы поместить объект в локальное хранилище, его нужно преобразовать в json строку
localStorage.setItem("key2", JSON.stringify(exemple_object)); //{"name":"John","age":30}

// Чтобы получить объект из локального хранилища, его нужно преобразовать из json строки в объект
console.log(JSON.parse(localStorage.getItem("key2")));

// В случае когда существует 2 вкладки и в одной их них происходит запись в локальное хранилще, то происходить создание события.
// Для синхронизации данных во вкладках можно событие слушать
window.addEventListener("storage", (event) => {});
//Альтернативаня запись
window.onstorage = (event) => {};

// локальное хранилище больше чем куки. Примерно 5мб
// Куки улетают с запросами на сервер
// Локальное хранилище остаётся на устройства
