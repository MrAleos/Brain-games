import getRandomNumber from '../getRandomNumber.js';
import run from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const primeNumber = getRandomNumber(100, 2);
  const correctAnswer = isPrime(primeNumber) ? 'yes' : 'no';
  const question = `${primeNumber}`;
  return [question, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => {
  run(generateRound, description);
};

export default startGame;
