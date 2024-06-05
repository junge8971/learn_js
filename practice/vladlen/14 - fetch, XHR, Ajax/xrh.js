// запросы шлём сюда
const url_for_request = "https://jsonplaceholder.typicode.com/users";

const xhr = new XMLHttpRequest();

// Открытие нового соединения
xhr.open("GET", url_for_request);

// Можно указать тип данных,который мы ждём от ответа, чтобы потом не парсить его
// Тогда xhr самостоятельно приведёт тело ответа к указанному типу данных
xhr.responseType = "json";
// Либо потом тело ответа поместить в JSON.parse()

// Добавлен слушатель события.
// Как только будет получен ответ, содержимое ответа выведено на экран
xhr.onload = () => {
  // Для обработок ошибок связанных с логикой приложения (пользователя нет), то можно проверять код статуса
  if (xhr.status >= 400) console.error(xhr.response);
  console.log(xhr.response);
};

// Обработчик событыя для ошибки
xhr.onerror = () => {
  console.log(xhr.response);
};

// отправка запроса
xhr.send();

// Теперь напишем нормально
function send_request(method, url) {
  return new Promise((resolve, reject) => {
    const new_xhr = new XMLHttpRequest();
    new_xhr.open(method, url);
    new_xhr.responseType = "json";
    new_xhr.onload = () => {
      if (xhr.status >= 400) reject(xhr.response);
      else {
        resolve(xhr.response);
      }
    };
    new_xhr.onerror = () => {
      reject(xhr.response);
    };
    new_xhr.send();
  });
}

const request_result = send_request("GET", url_for_request)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

// Отправка post
function send_request_that_can_do_post(method, url, body) {
  return new Promise((resolve, reject) => {
    const new_xhr = new XMLHttpRequest();
    new_xhr.open(method, url);

    new_xhr.responseType = "json";
    new_xhr.setRequestHeader("Content-Type", "application/json");

    new_xhr.onload = () => {
      if (xhr.status >= 400) reject(xhr.response);
      else {
        resolve(xhr.response);
      }
    };
    new_xhr.onerror = () => {
      reject(xhr.response);
    };
    new_xhr.send(JSON.stringify(body));
  });
}
const post_request_result = send_request_that_can_do_post("POST", url_for_request, {
  name: "user",
  age: 11,
});
post_request_result.then((response) => {
  console.log(response);
});
