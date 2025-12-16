// ===== البيانات (المستويات) =====
const levels = [
  {
    question: "ⴰⵎⴰⵏ (ماء)",
    answer: "aman"
  },
  {
    question: "ⴰⴼⵓⵙ (يد)",
    answer: "afus"
  },
  {
    question: "ⴰⴳⴳⴰⵔ (رجل)",
    answer: "aggar"
  },
  {
    question: "ⵜⴰⵎⴰⵣⵉⵖⵜ (أمازيغية)",
    answer: "tamazight"
  }
];

// ===== عناصر الصفحة =====
const levelBox = document.getElementById("levelBox");
const questionBox = document.getElementById("questionBox");
const answerInput = document.getElementById("answerInput");
const messageBox = document.getElementById("messageBox");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");

// ===== تحميل التقدم =====
let currentLevel = Number(localStorage.getItem("level")) || 0;

// ===== عرض المستوى =====
function loadLevel() {
  if (currentLevel >= levels.length) {
    questionBox.textContent = "🎉 أحسنت! أنهيت اللعبة";
    levelBox.textContent = "";
    answerInput.style.display = "none";
    checkBtn.style.display = "none";
    return;
  }

  levelBox.textContent = "المستوى: " + (currentLevel + 1);
  questionBox.textContent = levels[currentLevel].question;
  answerInput.value = "";
  messageBox.textContent = "";
}

loadLevel();

// ===== التحقق =====
checkBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim().toLowerCase();

  if (userAnswer === "") {
    messageBox.textContent = "❗ أدخل الجواب";
    return;
  }

  if (userAnswer === levels[currentLevel].answer) {
    messageBox.textContent = "✅ صحيح!";
    currentLevel++;
    localStorage.setItem("level", currentLevel);
    setTimeout(loadLevel, 700);
  } else {
    messageBox.textContent = "❌ خطأ، حاول مرة أخرى";
  }
});

// ===== إعادة =====
resetBtn.addEventListener("click", () => {
  localStorage.removeItem("level");
  location.reload();
});