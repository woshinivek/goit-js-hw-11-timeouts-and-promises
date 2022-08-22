import '../sass/index.scss';

const resultRef = document.querySelector('.result');

const delay = ms => {
  return new Promise(resolve => {
    const time = ms;

    setTimeout(() => {
      resolve(time);
    }, time);
  });
};

// const logger = time => console.log(`Resolved after ${time}ms`);

const logger = time =>
  resultRef.insertAdjacentHTML(
    'beforeend',
    `<li>
      <p>Promise Resolved after: <b> ${time}ms </b></p>
    </li>`
  );

// Вызовы функции для проверки
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

// delay(2000).then(result => {
//   console.log(result);
// }); // Resolved after 2000ms
