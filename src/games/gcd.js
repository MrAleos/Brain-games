import getRandomNumber from '../getRandomNumber.js';
import run from '../index.js';

const gcd = (a, b) => {
  let numberOne = a;
  let numberTwo = b;
  while (numberTwo !== 0) {
    const temp = numberTwo;
    numberTwo = numberOne % numberTwo;
    numberOne = temp;
  }
  return numberOne;
};

const generateRound = () => {
  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const question = `${numberOne} ${numberTwo}`;
  const correctAnswer = gcd(numberOne, numberTwo).toString();
  return [question, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

const startGame = () => {
  run(generateRound, description);
};

export default startGame;
