let question = document.getElementById('question')
let answer = document.getElementById('answer')
let history = document.getElementById('history')
let form = document.getElementById('mainform')
let list = document.getElementById('list')
let score = document.getElementById('score')

let questions = []
let answers = []
let errors = []

form.addEventListener("submit", (e) => {
    e.preventDefault()    
    answers.push(answer.value)
    answer.value = ''
    createItem()
    nextQuestion()
})

function createItem() {

    let q = questions.slice(-1)
    let a = answers.slice(-1)

    let correct = Math.sin(q * Math.PI / 180).toFixed(4)

    let diff = Number(Math.abs((correct - a) / correct).toFixed(2))

    errors.push(diff)

    let newEl = `<li>Sin(${q}) ${a} ${correct} ${diff}</li>`
    list.insertAdjacentHTML("beforeend",newEl)

    if (errors.length)
        {
            sum = errors.reduce(function(a, b) { return a + b; });
            avg = (sum / errors.length).toFixed(2);
        }
    
    score.innerHTML = (avg*100).toFixed(0)
}

function nextQuestion() {

    degrees =  Math.floor(Math.random() * 90) + 1
    questions.push(degrees)
    question.innerHTML = `sin(${degrees})?`
}

nextQuestion()

