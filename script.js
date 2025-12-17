const levels = [
  {
    question: "Man / رجل",
    answers: ["ⴰⵔⴳⴰⵣ", "argaz"]
  },
  {
    question: "Woman / امرأة",
    answers: ["ⵜⴰⵎⴳⴳⴰⵣⵜ", "tamggazt"]
  },
  {
    question: "Sun / شمس",
    answers: ["ⵜⴰⴼⵓⵢⵜ", "tafuyt"]
  }
];

let currentLevel = 0;

const startScreen = document.getElementById("startScreen");
const game = document.getElementById("game");
const startBtn = document.getElementById("startBtn");

const questionBox = document.getElementById("questionBox");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");
const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("errorMsg");

startBtn.onclick = () => {
  startScreen.classList.add("hidden");
  game.classList.remove("hidden");
  loadLevel();
};

function loadLevel() {
  if (currentLevel >= levels.length) {
    questionBox.textContent = "🎉 انتهت اللعبة";
    checkBtn.style.display = "none";
    answerInput.style.display = "none";
    return;
  }

  questionBox.textContent = levels[currentLevel].question;
  answerInput.value = "";
  successMsg.classList.add("hidden");
  errorMsg.classList.add("hidden");
}

checkBtn.onclick = () => {
  const userAnswer = answerInput.value.trim();
  const correctAnswers = levels[currentLevel].answers;

  if (correctAnswers.includes(userAnswer)) {
    successMsg.classList.remove("hidden");
    errorMsg.classList.add("hidden");
    currentLevel++;
    setTimeout(loadLevel, 700);
  } else {
    errorMsg.classList.remove("hidden");
    successMsg.classList.add("hidden");
  }
};
