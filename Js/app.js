import questions from './data.js';
/*CONSTANTS*/
//Grab DOM elements
const startBtn= document.getElementById('start-btn');
const startScreen= document.querySelector('.start-screen');
const difficultyScreen= document.querySelector('.difficulty-screen');
const difficultyBtns= Array.from(document.querySelectorAll('.difficulty-btn'));
const categoryScreen= document.querySelector('.category-screen');
const categoryBtns= Array.from(document.querySelectorAll('.category-btn'));
const quizScreen= document.querySelector('.quiz-screen');
const endScreen= document.querySelector('.end-screen');
const questionEl= document.getElementById('question');
const choicesEls= Array.from(document.querySelectorAll('.choice-btn'));
const nextBtn= document.getElementById('next-btn');
const scoreEl= document.getElementById('score');
const resultMsg= document.getElementById('result-message');
const restartBtn= document.getElementById('restart-btn');
const currentQuestionEl= document.getElementById('current-question');
const totalQuestionsEl= document.getElementById('total-questions');
const progressBar= document.getElementById('progress-bar');
const timerEl= document.getElementById('timer');
//Initial visibility setup
startScreen.style.display= 'flex';    // show start
categoryScreen.style.display = 'none'; //hide category
difficultyScreen.style.display = 'none'; //hide difficulty
quizScreen.style.display= 'none';    // hide quiz
endScreen.style.display= 'none';    // hide end
nextBtn.disabled= true;      // no “Next” until the user answered
/*VARIABLES*/
//State variables
let shuffledQs= [];
let currentIndex= 0;
let score= 0;
let timeLeft= 30;      //15 seconds per question
let timerInterval= null;
let chosenCategory = null;
let chosenDifficulty = null;
/*FUNCTIONS*/
//Start quiz: shuffle, reset, show quiz
function startQuiz(category, difficulty) {
  let pool = category === 'Mixed'
    ? questions                // If “Mixed”, use the entire bank
    : questions.filter(q => q.category === category);
  //Otherwise, filter to only those whose q.category matches

  //Filter by difficulty
  pool = pool.filter(q => q.difficulty === difficulty);
  //Now pool contains only questions of the chosen difficulty

  //Pick the right count (25 for Mixed, 10 for specific categories)
  const count = category === 'Mixed' ? 25 : 10;
  shuffledQs  = shuffleArray(pool).slice(0, count);
  currentIndex= 0;
  score= 0;
  //Once the user starts the game the quiz questions screen will be shown
  startScreen.style.display= 'none';
  difficultyScreen.style.display = 'none';
  quizScreen.style.display= 'flex';
  endScreen.style.display= 'none';
  totalQuestionsEl.innerText = shuffledQs.length;
  updateProgress();
  showQuestion();
}
//Progress bar
function updateProgress() {
  currentQuestionEl.innerText = currentIndex + 1;
  // fill the bar proportionally
  const pct = ((currentIndex + 1) / shuffledQs.length) * 100;
  progressBar.style.width = `${pct}%`;
}
//Show a question
function showQuestion() {
   //clear any old timer
  clearTimer();

  // reset the countdown
  timeLeft = 30;
  timerEl.innerText = timeLeft;

  // start ticking
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft;

    if (timeLeft <= 0) {
      // time’s up!
      clearTimer();
      handleTimeout();
    }
  }, 1000);
  updateProgress();
  const q = shuffledQs[currentIndex];
  questionEl.innerText = q.question;

  let choiceObjs = q.choices
    .map((text, i) => ({ text, isCorrect: i === q.answer }))
    .filter(c => c.text.trim() !== "");


  //Shuffle it
  const shuffled = shuffleArray(choiceObjs);

  //Reset UI
  nextBtn.disabled = true;
  choicesEls.forEach(btn => {
    btn.classList.remove('correct','wrong');
    btn.disabled = false;
  });

  //Render shuffled text + mark correct
  /*choicesEls.forEach((btn, i) => {
    btn.innerText= shuffled[i].text;
    btn.dataset.correct= shuffled[i].isCorrect;   // "true" or "false"
  });*/
  choicesEls.forEach((btn, i) => {
    if (i < choiceObjs.length) {
      btn.style.display = 'block';
      btn.innerText    = choiceObjs[i].text;
      btn.dataset.correct = choiceObjs[i].isCorrect;
    } else {
      btn.style.display = 'none';
    }
  });
}
//Handle answer selection
function selectAnswer(e) {
  clearTimer();
  const selected= e.target;
  const isCorrect= selected.dataset.correct === 'true';

  // mark correct / wrong
  if (isCorrect) {
    selected.classList.add('correct');
    score++;
  } else {
    selected.classList.add('wrong');
    // highlight the real correct button
    const correctBtn = choicesEls.find(btn => btn.dataset.correct === 'true');
    correctBtn.classList.add('correct');
  }

  // disable all and enable Next
  choicesEls.forEach(btn => btn.disabled = true);
  nextBtn.disabled = false;
}
function handleTimeout() {
  // mark correct button in green
  const correctBtn = choicesEls.find(b => b.dataset.correct === 'true');
  if (correctBtn) correctBtn.classList.add('correct');

  // disable all and allow “Next”
  choicesEls.forEach(b => b.disabled = true);
  nextBtn.disabled = false;
}
function clearTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}
//Next question or end
function handleNext() {
  currentIndex++;
  if (currentIndex < shuffledQs.length) {
    showQuestion();
  } else {
    showEndScreen();
  }
}

//Show final screen
function showEndScreen() {
  //Hidding the quiz screen and showing the result screen
  quizScreen.style.display = 'none';
  endScreen.style.display  = 'flex';
  // Show the total score based of the category mode chosen
  scoreEl.innerText= `${score} / ${shuffledQs.length}`;
  const pct = (score / shuffledQs.length)*100;
  if (pct===100)resultMsg.innerText = "Perfect score, you're the ultimate FOODIE! 🏆";
  else if (pct>=80)resultMsg.innerText = "You are a true FOODIE! 🍽️";
  else if (pct>=50)resultMsg.innerText = "Not bad, you're on your way to foodie status! 😉";
  else resultMsg.innerText = "Maybe you are not there yet! 🍕";
}

//Restart quiz
function restartQuiz() {
  quizScreen.style.display= 'none';
  endScreen.style.display= 'none';
  categoryScreen.style.display= 'none';
  startScreen.style.display= 'flex';

  currentIndex = 0;
  score= 0;
  shuffledQs= shuffleArray(questions);
  nextBtn.disabled = true;
  currentQuestionEl.innerText = currentIndex + 1;
  progressBar.style.width = '0%';
// clear any styling on choices
  choicesEls.forEach(b => {
    b.classList.remove('correct','wrong');
    b.disabled = false;
  });
  updateProgress();
  showQuestion();
}
//shuffle feature for the questions and choices
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
//Event listeners
//Now clicking the start button will take the user to the ctg screen not the quiz screen as previously
startBtn.addEventListener('click', () => {
  startScreen.style.display    = 'none';
  categoryScreen.style.display = 'flex';
});
//The user chose a category and it will take him to the quiz screen with questions are filtered based on ctg
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    chosenCategory= btn.dataset.category;
    categoryScreen.style.display = 'none';
    difficultyScreen.style.display = 'flex';
  });
});
difficultyBtns.forEach(btn => btn.addEventListener('click', () => {
  chosenDifficulty = btn.dataset.diff;
  difficultyScreen.style.display = 'none';
  startQuiz(chosenCategory, chosenDifficulty);
}));
choicesEls.forEach(btn => btn.addEventListener('click', selectAnswer));
nextBtn.addEventListener('click', handleNext);
restartBtn.addEventListener('click', restartQuiz);

