import readlineSync from 'readline-sync';

const ROUNDS = 3;
const randomNumber = () => Math.floor(Math.random() * 100);

const isEven = (value) => value % 2 === 0;

const greetNewUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('What is your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const checkEvenGame = () => {
  const name = greetNewUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < ROUNDS; i += 1) {
    const random = randomNumber();
    const isEvenNumber = isEven(random);
    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerLower = userAnswer.toLowerCase();
    if (isEvenNumber === true && userAnswerLower !== 'yes') {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`,
      );
      break;
    } else if (isEvenNumber === false && userAnswerLower !== 'no') {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`,
      );
      break;
    } else {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    }
  }
};

export default checkEvenGame;
