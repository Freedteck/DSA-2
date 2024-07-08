const dictionary = [
  "lake",
  "hair",
  "year",
  "road",
  "tale",
  "food",
  "map",
  "ear",
  "poet",
  "hall",
  "sir",
  "menu",
  "sonar",
  "exam",
  "city",
  "ad",
  "goal",
  "gene",
  "way",
  "math",
  "dirt",
  "loss",
  "debt",
  "dad",
  "mall",
  "love",
  "fact",
  "town",
  "king",
  "oven",
  "song",
  "lady",
  "area",
  "mode",
  "girl",
  "gate",
  "bird",
  "poem",
  "mom",
  "news",
  "meat",
  "desk",
  "bath",
  "wife",
  "data",
  "wood",
  "unit",
  "idea",
  "lab",
];
const letters = prompt("Enter string of letters:").split("");
const letterCounts = {};

letters.forEach((letter) => {
  letterCounts[letter] = (letterCounts[letter] || 0) + 1;
});

const matchingWords = [];
dictionary.forEach((word) => {
  const wordLetterCounts = {};
  let canFormWord = true;
  word.split("").forEach((letter) => {
    wordLetterCounts[letter] = (wordLetterCounts[letter] || 0) + 1;
    if (wordLetterCounts[letter] > (letterCounts[letter] || 0)) {
      canFormWord = false;
    }
  });
  if (canFormWord) {
    matchingWords.push(word);
    word.split("").forEach((letter) => {
      letterCounts[letter]--;
    });
  }
});

const unusedLetters = [];
Object.keys(letterCounts).forEach((letter) => {
  for (let i = 0; i < letterCounts[letter]; i++) {
    unusedLetters.push(letter);
  }
});

console.log(`Matching words are: ${matchingWords.join(", ")}`);
console.log(`Unused letters are: ${unusedLetters.join("")}`);
