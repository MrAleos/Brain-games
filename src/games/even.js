import getRandomNumber from '../getRandomNumber.js';
import run from '../index.js';

const isEven = (value) => (value % 2 === 0);

const generateRound = () => {
  const random = getRandomNumber();
  const correctAnswer = isEven(random) ? 'yes' : 'no';
  const question = `${random}`;
  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  run(generateRound, description);
};

export default startGame;
