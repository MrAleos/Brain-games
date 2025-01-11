import getRandomNumber from '../getRandomNumber.js';
import run from '../index.js';

const calculate = (numberOne, numberTwo, operation) => {
  switch (operation) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      return 'Invalid operation';
  }
};

const generateRound = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = getRandomNumber(operations.length - 1);
  const operation = operations[randomIndex];

  const numberOne = getRandomNumber();
  const numberTwo = getRandomNumber();
  const correctAnswer = calculate(numberOne, numberTwo, operation).toString();
  const question = `${numberOne} ${operation} ${numberTwo}`;
  return [question, correctAnswer];
};

const description = 'What is the result of the expression?';

const startGame = () => {
  run(generateRound, description);
};

export default startGame;
