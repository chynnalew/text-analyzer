// Business logic

let wordCount = 0

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
    wordCount++ ;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText() {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}