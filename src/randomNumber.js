const randomNumber = (max = 100, min = 0) => {
  const resultRandomNimber = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultRandomNimber;
};

export default randomNumber;
