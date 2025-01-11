import getRandomNumber from '../getRandomNumber.js';
import run from '../index.js';

const generateProgression = (start, step, length, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(start + i * step);
    }
  }
  return progression;
};

const getGameInfo = () => {
  const lengthNumber = getRandomNumber(10, 5);
  const hiddenIndex = getRandomNumber(lengthNumber - 1);
  const progressionStep = getRandomNumber(10, 1);
  const startValue = getRandomNumber(20);
  const correctAnswer = startValue + hiddenIndex * progressionStep;
  // eslint-disable-next-line max-len
  const progressionArray = generateProgression(startValue, progressionStep, lengthNumber, hiddenIndex);

  const question = `${progressionArray.join(' ')}`;

  return [question, correctAnswer.toString()];
};

const description = 'What number is missing in the progression?';

const startGame = () => {
  run(getGameInfo, description);
};

export default startGame;
