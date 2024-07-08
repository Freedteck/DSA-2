const text = prompt("Enter one or more paragraphs of text:");
const words = text.match(/\b\w+\b/g);
const wordCounts = {};

words.forEach((word) => {
  word = word.toLowerCase();
  wordCounts[word] = (wordCounts[word] || 0) + 1;
});

const sortedWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]);

console.log("Word cloud:");
sortedWords.forEach(([word, count]) => {
  console.log(`${word}: ${count}`);
});
