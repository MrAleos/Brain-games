import getRandomNumber from '../randomNumber.js';
import run from '../index.js';

const isEven = (value) => (value % 2 === 0 ? 'yes' : 'no');

const getGameInfo = () => {
  const random = getRandomNumber();
  const correctAnswer = isEven(random);
  const question = `Question: ${random}`;
  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  run(getGameInfo, description);
};

export default startGame;
