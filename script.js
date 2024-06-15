'use strict';
let highscore = 20;
let Score = 20;
let firstime = false;
const setHighScore = score => {
  document.querySelector('.highscore').textContent = score;
};
const setScore = score => {
  document.querySelector('.score').textContent = score;
};
const getRandomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};
const SetNumber = num => {
  document.querySelector('.number').textContent = num;
};
let GeneratedRandomNum = getRandomNumber();
const SetMessage = msg => {
  document.querySelector('.message').textContent = msg;
};
const ResetConfiguration = () => {
  GeneratedRandomNum = getRandomNumber();
  console.log('the new number is ' + GeneratedRandomNum);
  Score = 20;
  setScore(Score);
  SetMessage('Start Guessing...');
  document.body.style.backgroundColor = '#222';
  console.log('new Number ' + GeneratedRandomNum);
  SetNumber('?');
  document.querySelector('.guess').value = '';
};

console.log('the number is ' + GeneratedRandomNum);
setHighScore(highscore);
const Verification = value => {
  if (value > GeneratedRandomNum) {
    SetMessage('too High...');
    Score--;
    setScore(Score);
  } else if (value == GeneratedRandomNum) {
    SetMessage('💥 Congratulation');
    document.body.style.backgroundColor = '#60b347';
    SetNumber(GeneratedRandomNum);
    if (!firstime) {
      if (Score < highscore) {
        firstime = true;
        highscore = Score;
        setHighScore(highscore);
      }
    } else {
      if (Score > highscore) {
        highscore = Score;
        setHighScore(highscore);
      }
    }
  } else {
    SetMessage('too Low...');
    Score--;
    setScore(Score);
  }
};
document.querySelector('.again').addEventListener('click', () => {
  ResetConfiguration();
});
document.querySelector('.check').addEventListener('click', () => {
  if (!(document.querySelector('.guess').value == ''))
    Verification(Number(document.querySelector('.guess').value));
});
