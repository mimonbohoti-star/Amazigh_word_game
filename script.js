checkBtn.onclick = (e) => {
  e.preventDefault();

  const userAnswer = answerInput.value.trim().toLowerCase();
  if (!userAnswer) return;

  const correctAnswers = levels[currentLevel].answers.map(a =>
    a.toLowerCase()
  );

  if (correctAnswers.includes(userAnswer)) {
    successMsg.classList.remove("hidden");
    errorMsg.classList.add("hidden");

    currentLevel++;
    answerInput.value = "";   // مسح الجواب
    loadLevel();              // سؤال جديد
  } else {
    errorMsg.classList.remove("hidden");
    successMsg.classList.add("hidden");
  }
};
