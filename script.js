// const levels = [
  {
    question: "Man / رجل",
    answers: ["ⴰⵎⴳⴳⴰⵣ", "amggaz"]
  },
  {
    question: "Woman / امرأة",
    answers: ["ⵜⴰⵎⴳⴳⴰⵣⵜ", "tamggazt"]
  }
];

// =======================
// عناصر الصفحة
// =======================

const startScreen = document.getElementById("startScreen");
const game = document.getElementById("game");
const questionBox = document.getElementById("questionBox");
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");
const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("errorMsg");
const countBox = document.querySelector(".count");

let currentLevel = 0;

// =======================
// شاشة البداية
// =======================

startScreen.onclick = () => {
  startScreen.classList.add("hidden");
  game.classList.remove("hidden");
  loadLevel();
};

// =======================
// تحميل السؤال
// =======================

function loadLevel() {
  if (currentLevel >= levels.length) {
    questionBox.textContent = "🎉 End / انتهت اللعبة";
    answerInput.style.display = "none";
    checkBtn.style.display = "none";
    return;
  }

  questionBox.textContent = levels[currentLevel].question;
  countBox.textContent = `Question ${currentLevel + 1} / ${levels.length}`;
  answerInput.value = "";
  successMsg.classList.add("hidden");
  errorMsg.classList.add("hidden");
}

// =======================
// التحقق
// =======================

checkBtn.onclick = () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  const validAnswers = levels[currentLevel].answers.map(a => a.toLowerCase());

  if (validAnswers.includes(userAnswer)) {
    successMsg.classList.remove("hidden");
    errorMsg.classList.add("hidden");
    currentLevel++;
    setTimeout(loadLevel, 700);
  } else {
    errorMsg.classList.remove("hidden");
    successMsg.classList.add("hidden");
  }
};
