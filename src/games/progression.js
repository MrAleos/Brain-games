/* eslint-disable max-len */
import getRandomNumber from '../getRandomNumber.js';
import run from '../index.js';

const MAX_PROGRESSION_LENGTH = 10;
const MIN_PROGRESSION_LENGTH = 5;
const MAX_PROGRESSION_STEP = 10;
const MIN_PROGRESSION_STEP = 1;
const MAX_START_VALUE = 20;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const getGameInfo = () => {
  const lengthNumber = getRandomNumber(MAX_PROGRESSION_LENGTH, MIN_PROGRESSION_LENGTH);
  const hiddenIndex = getRandomNumber(lengthNumber - 1);
  const progressionStep = getRandomNumber(MAX_PROGRESSION_STEP, MIN_PROGRESSION_STEP);
  const startValue = getRandomNumber(MAX_START_VALUE);
  const correctAnswer = startValue + hiddenIndex * progressionStep;
  const progressionArray = generateProgression(startValue, progressionStep, lengthNumber);

  progressionArray[hiddenIndex] = '..';

  const question = progressionArray.join(' ');

  return [question, correctAnswer.toString()];
};

const description = 'What number is missing in the progression?';

const startGame = () => {
  run(getGameInfo, description);
};

export default startGame;
