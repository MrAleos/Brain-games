import readlineSync from 'readline-sync';

const ROUNDS = 3;

const greetNewUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('What is your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const mainIterforAllGames = (getGameData, description) => {
  const name = greetNewUser();
  console.log(description());
  let hasFailed = false;
  for (let i = 0; i < ROUNDS; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswerString = correctAnswer.toString();
    const userAnswerLowerString = userAnswer.toString().toLowerCase();
    if (userAnswerLowerString !== correctAnswerString) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${name}!`);
      hasFailed = true;
      break;
    } else {
      console.log('Correct!');
    }
  }
  if (!hasFailed) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default mainIterforAllGames;
