import randomNumber from '../randomNumber.js';

const randomOperation = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
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
  const correctAnswer = calculate(numberOne, numberTwo, operation);
  const question = `Question: ${numberOne} ${operation} ${numberTwo}`;
  return [question, correctAnswer];
};

const discription = () => 'What is the result of the expression?';

export { getGameInfo, discription };
