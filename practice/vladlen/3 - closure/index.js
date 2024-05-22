// Если просто, то замыкания - это функция внутри функции
function createCalkFunction(arg) {
  return function () {
    console.log("exemple" + arg);
  };
}

createCalkFunction("kek");

// при отработке этого вызова мы получим в ответ функцию
/*ƒ () {
    console.log("exemple" + arg);
  } */
// для того чтобы записать результат нужна переменная
const calc = createCalkFunction("kek");
calc();
// теперь мы можем вызвать эту функцию и получить результат - exemplekek

// Так как полученая функция была вызвана в контексте функции createCalkFunction, то переменная arg была замкнута

// Более подробный пример
function createIncrementor(a) {
  return function (b) {
    return a + b;
  };
}

const addOne = createIncrementor(1);
// при вызове функции addOne значение a будет замкнуто в конструкторе, и передавая значение только b мы сможем полуить результат сложения a и b
console.log(addOne(50)); //51

// Ещё пример
function urlGenerator(domain) {
  return function (url) {
    return `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator("com");
console.log(comUrl("pornhub")); // https://pornhub.com
