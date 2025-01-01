import getRandomNumber from '../randomNumber.js';
import run from '../index.js';

const getGameInfo = () => {
  const lengthNumber = getRandomNumber(10, 5);
  const randomizerNumberStep = getRandomNumber(lengthNumber - 1);
  const progressionStep = getRandomNumber(10, 1);
  const startValue = getRandomNumber(20);
  const progressionArray = [];
  let correctAnswer = 0;
  let valueTemp = startValue;
  for (let i = 0; i < lengthNumber; i += 1) {
    progressionArray[i] = valueTemp;
    if (i === randomizerNumberStep) {
      correctAnswer = progressionArray[i];
      progressionArray[i] = '..';
    }
    valueTemp += progressionStep;
  }
  const question = `Question: ${progressionArray.join(' ')}`;

  return [question, correctAnswer.toString()];
};

const description = 'What number is missing in the progression?';

const startGame = () => {
  run(getGameInfo, description);
};

export default startGame;
