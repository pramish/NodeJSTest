const reverseString = (word) => {
  let finalWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    finalWord += word[i];
  }
  return finalWord;
};

// console.log(reverseString("Pramish"));

const repeatSentence
