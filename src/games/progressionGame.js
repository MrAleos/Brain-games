import randomNumber from '../randomNumber.js';

const getGameInfo = () => {
  const lengthNumber = randomNumber(10, 5);
  const randomizerNumberStep = randomNumber(lengthNumber - 1);
  const progressionStep = randomNumber(10, 1);
  const startValue = randomNumber(20);
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

  return [question, correctAnswer];
};

const description = () => 'What number is missing in the progression?';

export { getGameInfo, description };
