const levels = [
  {
    question: "Man / رجل",
    answers: ["ⴰⵔⴳⴰⵣ", "argaz"]
  },
  {
    question: "Woman / امرأة",
    answers: ["ⵜⴰⵎⴳⴳⴰⵣⵜ", "tamggazt"]
  }
];

let currentLevel = 0;

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("answerInput");
const resultEl = document.getElementById("result");

function loadLevel() {
  questionEl.textContent = levels[currentLevel].question;
  inputEl.value = "";
  resultEl.textContent = "";
}

function checkAnswer() {
  const userAnswer = inputEl.value.trim();
  const correctAnswers = levels[currentLevel].answers;

  if (correctAnswers.includes(userAnswer)) {
    resultEl.textContent = "✅ صحيح";
    currentLevel++;
    if (currentLevel < levels.length) {
      setTimeout(loadLevel, 800);
    } else {
      questionEl.textContent = "🎉 انتهت اللعبة";
    }
  } else {
    resultEl.textContent = "❌ خطأ";
  }
}

loadLevel();
