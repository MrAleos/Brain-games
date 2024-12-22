import randomNumber from '../randomNumber.js';

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

const getGameInfo = () => {
  const numberOne = randomNumber();
  const numberTwo = randomNumber();
  const question = `Question: ${numberOne} ${numberTwo}`;
  const correctAnswer = gcd(numberOne, numberTwo);
  return [question, correctAnswer];
};

const description = () => 'Find the greatest common divisor of given numbers.';

export { getGameInfo, description };
