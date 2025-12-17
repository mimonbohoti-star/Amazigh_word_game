// شاشة البداية
const startScreen = document.getElementById("startScreen");
const game = document.getElementById("game");

startScreen.onclick = () => {
  startScreen.classList.add("hidden");
  game.classList.remove("hidden");
};

// عناصر اللعبة
const answerInput = document.getElementById("answerInput");
const checkBtn = document.getElementById("checkBtn");
const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("errorMsg");

// الجواب الصحيح (تيفيناغ + Latin)
const validAnswers = ["ⴰⴳⴳⴰⵔ", "aggar"];

checkBtn.onclick = () => {
  const userAnswer = answerInput.value.trim().toLowerCase();

  successMsg.classList.add("hidden");
  errorMsg.classList.add("hidden");

  if (userAnswer === "") {
    errorMsg.textContent = "❗ Please enter an answer";
    errorMsg.classList.remove("hidden");
    return;
  }

  if (validAnswers.includes(userAnswer)) {
    successMsg.classList.remove("hidden");
  } else {
    errorMsg.classList.remove("hidden");
  }
};
