const randomNumber = (max = 100, min = 0) => {
  const resultRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultRandomNumber;
};

export default randomNumber;
