console.log("making request");

// пример вложенности при большом количестве колбеков
// это плохо, потомучто код ростёт в ширину, а не в высоту и внесение изменений может быть проблематичным
setTimeout(() => {
  console.log("prepare data for request");
  const data_from_back = {
    server: "kek",
    port: 1,
    status: 200,
  };

  setTimeout(() => {
    data_from_back.modified = true;
    console.log("data received");
    console.log(data_from_back);
  }, 1000);
}, 1000);

// чтобы решить проблему были придуманы promise
// промес передаёт в функцию 2 параметра resolve, request
// resolve - вызывается, когда закончена успешно асинхранноая операция

const my_promise = new Promise((resolve, request) => {
  // асинхронный код
  setTimeout(() => {
    console.log("prepare data for request in promise");
    const data_from_back = {
      server: "kek",
      port: 1,
      status: 200,
    };
    resolve(data_from_back);
  }, 1000);
});
// в данном примере всего один уровень сложности
my_promise
  .then((data_from_back) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data_from_back.modified = true;
        resolve(data_from_back);
      }, 1000);
    });
  })
  .then((data_from_back) => {
    console.log(data_from_back);
  })

  // есть ещё специальный метод catch
  // он получет значения ошибки, в случае когда ошибка случилась
  .catch((error) => {
    console.error(error);
  })
  // есть ещё специальный метод finally
  // он отработает в лобом случае, даже если есть ошибка
  .finally(() => {
    console.log("Completed");
  });

// У промесов тоже есть методы
// Если нужно дождаться ответа от множества промисов то существует метод all

//В качестве примера создам функцию возращающую промис

const exemple_promise = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// в данном случает код в блоке then выполняется, когда были завершены все переданные промисы
Promise.all([exemple_promise(2000), exemple_promise(5000)]).then(() => {
  console.log("Promises completed");
});

// Так же есть метод race
// Он ждёт только отработку одного из передонных промисов
Promise.race([exemple_promise(2000), exemple_promise(5000)]).then(() => {
  console.log("Promises race completed");
});
