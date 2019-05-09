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

  let diff_class = "";

  if (diff < 30) {
    diff_class = "great-score";
  } 

  else if (diff < 60){
    diff_class = "middle-score";
  }

  else {
    diff_class = "bad-score"
  }

  let emoji = "";


  if (diff < 10) {
    emoji = "&#128526";
  } 

  else if (diff < 20) {
    emoji = "&#128524";
  } 
  else if (diff < 40) {
    emoji = "&#128527";
  } 

  else if (diff < 60) {
    emoji = "&#128557";
  } 
  else if (diff < 80){
    emoji = "&#129327";
  }

  else {
    emoji = "&#129313";
  }

  let newEl = `<tr>
                    <td>Sin(${q})</td>
                    <td>${a}</td>
                    <td>${correct}</td>
                    <td class=${diff_class}>${diff}</td>
                    <td>${emoji}</td>
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
