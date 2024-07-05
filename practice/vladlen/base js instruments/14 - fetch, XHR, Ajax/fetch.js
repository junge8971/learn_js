// запросы шлём сюда
const url_for_request = "https://jsonplaceholder.typicode.com/users";

//fetch возвращает промис
// По умолчанию fetch выполняет get запрос

function send_fetch_request(method, url, data = null) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
}

// Отправка get
const response_from_get = send_fetch_request("GET", url_for_request).then((response) =>
  console.log(response)
);
