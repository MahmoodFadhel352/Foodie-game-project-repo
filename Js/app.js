import questions from './data.js';
/*CONSTANTS*/
//Grab DOM elements
const startBtn= document.getElementById('start-btn');
const startScreen= document.querySelector('.start-screen');
const quizScreen= document.querySelector('.quiz-screen');
const endScreen= document.querySelector('.end-screen');
const questionEl= document.getElementById('question');
const choicesEls= Array.from(document.querySelectorAll('.choice-btn'));
const nextBtn= document.getElementById('next-btn');
const scoreEl= document.getElementById('score');
const resultMsg= document.getElementById('result-message');
const restartBtn= document.getElementById('restart-btn');
//Initial visibility setup
startScreen.style.display= 'flex';    // show start
quizScreen.style.display= 'none';    // hide quiz
endScreen.style.display= 'none';    // hide end
nextBtn.disabled= true;      // no “Next” until the user answered
/*VARIABLES*/
//State variables
let shuffledQs= [];
let currentIndex= 0;
let score= 0;
/*FUNCTIONS*/
//Start quiz: shuffle, reset, show quiz
function startQuiz() {
  shuffledQs= shuffleArray(questions);
  currentIndex= 0;
  score= 0;
  //Once the user starts the game the quiz questions screen will be shown
  startScreen.style.display= 'none';
  quizScreen.style.display= 'flex';
  endScreen.style.display= 'none';

  showQuestion();
}

//Show a question
function showQuestion() {
  const q = shuffledQs[currentIndex];
  questionEl.innerText = q.question;

  //Build an array of { text, isCorrect }
  const choiceObjs = q.choices.map((text, i) => ({
    text,
    isCorrect: i === q.answer
  }));

  //Shuffle it
  const shuffled = shuffleArray(choiceObjs);

  //Reset UI
  nextBtn.disabled = true;
  choicesEls.forEach(btn => {
    btn.classList.remove('correct','wrong');
    btn.disabled = false;
  });

  //Render shuffled text + mark correct in a data-attr
  choicesEls.forEach((btn, i) => {
    btn.innerText= shuffled[i].text;
    btn.dataset.correct= shuffled[i].isCorrect;   // "true" or "false"
  });
}
//Event listeners
startBtn.addEventListener('click', startQuiz);
//Checkpoint