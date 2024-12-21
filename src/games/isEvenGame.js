import randomNumber from '../randomNumber.js';

const isEven = (value) => (value % 2 === 0 ? 'yes' : 'no');

const getGameInfo = () => {
  const random = randomNumber();
  const correctAnswer = isEven(random);
  const question = `Question: ${random}`;
  return [question, correctAnswer];
};

const description = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export { getGameInfo, description };
