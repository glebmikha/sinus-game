let question = document.getElementById("question");
let answer = document.getElementById("answer");
let history = document.getElementById("history");
let form = document.getElementById("mainform");
let list = document.getElementById("list");
let score = document.getElementById("score");
let my_table = document.getElementById("my-table");

let questions = [];
let answers = [];
let errors = [];

form.addEventListener("submit", e => {
  e.preventDefault();
  answers.push(answer.value);
  answer.value = "";
  createItem();
  nextQuestion();
});

function createItem() {
  let q = questions.slice(-1);
  let a = answers.slice(-1);

  let correct = Math.sin((q * Math.PI) / 180).toFixed(4);

  let diff = Number(Math.abs(((correct - a) * 100) / correct).toFixed(1));

  errors.push(diff);

  // Задание 1
  // сюда добавь логику назначения класса для td c переменной diff
  // я сделал переменную diff_class, как заготовку
  // ты ее уже заверни в if, где решай, чему она будет равна
  // в зависимости от знаания переменной diff
  // так же обрати внимаение, что я уже добавил назнание класса
  // в четвертом столбце -- тебе нужно только логику сделать

  let diff_class = "red-score";

  // Задание 2
  // Добавь в таблицу пятую колонку, где будут отображаться
  // разные эмоджи в зависимости от переменной diff
  // коды можно смотреть тут https://www.w3schools.com/charsets/ref_emoji_smileys.asp
  // сделай 5 разных рож в зависимости от ошибки. можешь так же сделать жуткую рожу
  // если ошибку больше 500%
  // логика такая же -- у тебя будет переменная с эмоджи, вот тебе заготовка

  let emoji = "&#129313";

  // и дальше в if ты будешь класть в нее другой код в зависимоти от diff
  // кстати в java script тоже есть elif -- вот тут найди как его писать
  // https://www.w3schools.com/js/js_if_else.asp
  // затем в пятую колонку засунешь переменную emofi так же, как остальные
  // с помощью ${}

  let newEl = `<tr>
                    <td>Sin(${q})</td>
                    <td>${a}</td>
                    <td>${correct}</td>
                    <td class=${diff_class}>${diff}</td>
                </tr>`;

  my_table.insertAdjacentHTML("beforeend", newEl);

  if (errors.length) {
    sum = errors.reduce(function(a, b) {
      return a + b;
    });
    avg = sum / errors.length;
  }

  // добавляем значение avg к элементу score
  score.innerHTML = (avg * 1).toFixed(1);

  // в зависимости от значения avg ставим элементу score зеленый
  // или красный цвет (прописан в классе)
  if (avg < 50) {
    score.className = "green-score";
  } else {
    score.className = "red-score";
  }
}

function nextQuestion() {
  degrees = Math.floor(Math.random() * 90) + 1;
  questions.push(degrees);
  question.innerHTML = `Sin(${degrees})?`;
}

nextQuestion();
