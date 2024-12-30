import randomNumber from '../randomNumber.js';
import run from '../index.js';

const randomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = randomNumber(operations.length - 1);
  return operations[randomIndex];
};

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

const getGameInfo = () => {
  const operation = randomOperation();
  const numberOne = randomNumber();
  const numberTwo = randomNumber();
  const correctAnswer = calculate(numberOne, numberTwo, operation).toString();
  const question = `Question: ${numberOne} ${operation} ${numberTwo}`;
  return [question, correctAnswer];
};

const description = () => 'What is the result of the expression?';

const startGame = () => {
  run(getGameInfo, description);
};

export default startGame;
