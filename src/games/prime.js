import getRandomNumber from '../randomNumber.js';
import run from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return 'no';
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameInfo = () => {
  const primeNumber = getRandomNumber(100, 2);
  const correctAnswer = isPrime(primeNumber);
  const question = `Question: ${primeNumber}`;
  return [question, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => {
  run(getGameInfo, description);
};

export default startGame;
