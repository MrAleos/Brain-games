import randomNumber from '../randomNumber.js';
import mainIterforAllGames from '../index.js';

const isEven = (value) => (value % 2 === 0 ? 'yes' : 'no');

const getGameInfo = () => {
  const random = randomNumber();
  const correctAnswer = isEven(random);
  const question = `Question: ${random}`;
  return [question, correctAnswer];
};

const description = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  mainIterforAllGames(getGameInfo, description);
};

export default startGame;
