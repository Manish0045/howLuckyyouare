//* Messages
const WIN_MESSAGE = 'Wow! You guessed right! 🤯, You are a lucky person!';
const LOW_MESSAGE = 'Your guess is too low! 📉 ';
const HIGH_MESSAGE = 'Your guess is too high! 📈';
const OUT_OF_GUESSES_MESSAGE = 'You have run out of guesses! 😭';
const OUT_OF_RANGE = 'Please enter a number between 0 and 20';

//Lucky Number
let LuckyNumber=Math.floor(Math.random()*20);
let score=10;

console.log(LuckyNumber);


const checkButton = document.querySelector('#check');
const guessInput = document.querySelector('#guessing');
const messageBox = document.querySelector('#message');
const mainSection = document.querySelector('main');
const leftSection = document.querySelector('.left');
const againButton = document.querySelector('#again');
const scoreSection = document.querySelector('#score');

scoreSection.innerText = score;


const check = (guess) => {
    if (guess > 20 || guess < 0) return OUT_OF_RANGE;
    if (guess === LuckyNumber) return WIN_MESSAGE;
    if (guess > LuckyNumber) return HIGH_MESSAGE;
    if (guess < LuckyNumber) return LOW_MESSAGE;
  };


  const scoreProcess = (message) => {
    if (message === WIN_MESSAGE) {
      leftSection.style.visibility = 'hidden';
      mainSection.style.backgroundColor = '#367E18';
      return;
    }
  
    if (message === LOW_MESSAGE || message === HIGH_MESSAGE) {
      score--;
      scoreSection.textContent = score;
      mainSection.style.backgroundColor = '#DD5353';
    }
  
    if (score === 0) {
      leftSection.style.visibility = 'hidden';
      messageBox.textContent = OUT_OF_GUESSES_MESSAGE;
      mainSection.style.backgroundColor = '#333';
    }
  };


  checkButton.addEventListener('click', () => {
    const message = check(Number(guessInput.value));
    messageBox.textContent = message;
    scoreProcess(message);
  });
  
  againButton.addEventListener('click', () => {
    LuckyNumber = Math.floor(Math.random() * 20);
    console.log(LuckyNumber);
    score = 10;
    scoreSection.textContent = score;
  
    mainSection.style.backgroundColor = '#333';
  
    leftSection.style.visibility = 'visible';
    messageBox.textContent = 'Start guessing...';
  
    guessInput.value = '';
  });