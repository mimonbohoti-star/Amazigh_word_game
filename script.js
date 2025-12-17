// =======================
// المستويات (السؤال عربي + إنجليزي – الجواب بالأمازيغية)
// يقبل الإدخال: تيفيناغ أو Latin
// =======================

const levels = [
  {
    question: { ar: "ماء", en: "Water" },
    answers: ["ⴰⵎⴰⵏ", "aman"]
  },
  {
    question: { ar: "يد", en: "Hand" },
    answers: ["ⴰⴼⵓⵙ", "afus"]
  },
  {
    question: { ar: "رجل", en: "Man" },
    answers: ["ⴰⴳⴳⴰⵔ", "aggar"]
  },
  {
    question: { ar: "اللغة الأمازيغية", en: "Amazigh language" },
    answers: ["ⵜⴰⵎⴰⵣⵉⵖⵜ", "tamazight"]
  }
];

// =======================
// عناصر الصفحة
// =======================

const levelBox = document.getElementById("levelBox");
const questionBox = document.getElementById("questionBox");
const answerInput = document.getElementById("answerInput");
const messageBox = document.getElementById("messageBox");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");

// =======================
// تحميل التقدم
// =======================

let currentLevel = Number(localStorage.getItem("level")) || 0;

// =======================
// عرض المستوى (✔ عربي + إنجليزي)
// =======================

function loadLevel() {
  if (currentLevel >= levels.length) {
    questionBox.textContent = "🎉 Congratulations! / انتهت اللعبة";
    levelBox.textContent = "";
    answerInput.style.display = "none";
    checkBtn.style.display = "none";
    return;
  }

  levelBox.textContent = "Level " + (currentLevel + 1);

  const q = levels[currentLevel].question;
  questionBox.textContent = `${q.ar} / ${q.en}`;

  answerInput.value = "";
  messageBox.textContent = "";
}

loadLevel();

// =======================
// التحقق من الجواب
// =======================

checkBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim().toLowerCase();

  if (!userAnswer) {
    messageBox.textContent = "❗ Please enter an answer / أدخل الجواب";
    return;
  }

  const validAnswers = levels[currentLevel].answers.map(
    a => a.toLowerCase()
  );

  if (validAnswers.includes(userAnswer)) {
    messageBox.textContent = "✅ Correct! / صحيح";
    currentLevel++;
    localStorage.setItem("level", currentLevel);
    setTimeout(loadLevel, 700);
  } else {
    messageBox.textContent = "❌ Wrong answer / جواب خاطئ";
  }
});

// =======================
// إعادة البداية
// =======================

resetBtn.addEventListener("click", () => {
  localStorage.removeItem("level");
  location.reload();
});
