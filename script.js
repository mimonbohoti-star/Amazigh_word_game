// =======================
// الأسئلة (مرحلة التجريب)
// =======================

const levels = [
  {
    question: "Man / رجل",
    answers: ["ⴰⵔⴳⴰⵣ", "amggaz"]
  },
  {
    question: "Woman / امرأة",
    answers: ["ⵜⴰⵎⵖⴰⵔⵜ", "tamggazt"]
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
let locked = false;

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
  locked = false;

  if (currentLevel >= levels.length) {
    questionBox.textContent = "🎉 End / انتهت اللعبة";
    countBox.textContent = "";
    answerInput.style.display = "none";
    checkBtn.style.display = "none";
    successMsg.classList.add("hidden");
    errorMsg.classList.add("hidden");
    return;
  }

  questionBox.textContent = levels[currentLevel].question;
  countBox.textContent = `Question ${currentLevel + 1} / ${levels.length}`;
  answerInput.value = "";
  successMsg.classList.add("hidden");
  errorMsg.classList.add("hidden");
}

// =======================
// التحقق من الجواب
// =======================

checkBtn.onclick = () => {
  if (locked) return;
  locked = true;

  const userAnswer = answerInput.value.trim().toLowerCase();
  const correctAnswers = levels[currentLevel].answers.map(a => a.toLowerCase());

  if (correctAnswers.includes(userAnswer)) {
    successMsg.classList.remove("hidden");
    errorMsg.classList.add("hidden");

    setTimeout(() => {
      currentLevel++;
      loadLevel();
    }, 700);
  } else {
    locked = false;
    errorMsg.classList.remove("hidden");
    successMsg.classList.add("hidden");
  }
};
