const questions = [
  "What planet is known as the 'Red Planet'?", 
  "Who painted the Mona Lisa?"
  ];
const choicesArray = [
  ["Earth", "Mars", "Jupiter", "Saturn"], 
  ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"]
  ];
const correctAnswers = [
  "Mars", 
  "Da Vinci"
  ];
let currentQuestionIndex = 0;
let score = 0;

function checkAnswer (button) {
  if (button.value == correctAnswers[currentQuestionIndex]) {
    score++;
    document.getElementById('result').innerHTML = "Correct! Score: " + score;
  } else {
    document.getElementById('result').innerHTML = "Wrong! Score: " + score;
  }

  currentQuestionIndex++;

  // Disable buttons after answering
  for (let i = 0; i < 4; i++) {
    document.getElementById(`choice${i+1}`).disabled = true;
  }

  // Show next question
  setTimeout(displayQuestion, 1000); // small delay before next question
}


function displayQuestion () {
  if (currentQuestionIndex < questions.length) {
    document.getElementById('question').innerHTML = questions[currentQuestionIndex];

    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`choice${i+1}`);
      btn.innerHTML = choicesArray[currentQuestionIndex][i];
      btn.value = choicesArray[currentQuestionIndex][i];
      btn.disabled = false; // re-enable here
    }
  } else {
    document.getElementById('result').innerHTML = `Quiz complete! Final Score: ${score}/${questions.length}`;
    for (let i = 0; i < 4; i++) {
      document.getElementById(`choice${i+1}`).style.display = "none"; // hide buttons
    }
    document.getElementById('question').innerHTML = "";
  }
}

displayQuestion ();
