const url_for_fetching = "https://jsonplaceholder.typicode.com/todos/1";

const fake_delay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

// Релизация запроса на промисах
function fetch_something() {
  // в es6 js в function expression автоматически возращается релультат
  return fake_delay(1000)
    .then(() => fetch(url_for_fetching))
    .then((response) => response.json());
}

response = fetch_something();
response
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// теперь async / await

// Под копотом при наличии оператора async и await операции обарачиваются в промис
// async function - возвращает промис
async function fetch_something_async() {
  try {
    await fake_delay(1000);
    // следущая строка не будет исполнятся, пока промес не разрешиться
    const response = await fetch(url_for_fetching);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }

  // Если надо поймать ошибку, то используется try/cath
}
fetch_something_async();
