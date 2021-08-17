Describe: wordCounter()

TEST: "It should return 1 if a passage has just one word."
CODE:
const text = "hello";
wordCounter(text);
EXPECTED OUTPUT: 1

TEST: "It should return 2 if a passage has two words.":
CODE:
const text = "hello there";
wordCounter(text);
EXPECTED OUTPUT: 2

TEST: "It should return 0 for an empty string."
CODE: wordCounter("");
EXPECTED OUTPUT: 0

TEST: "It should return 0 for a string that only includes space"
CODE: wordcounter("             ");
EXPECTED OUTPUT: 0

TEST: "It should not include numbers as words"
CODE: wordCounter("hi there 77 19")
EXPECTED OUTPUT: 2

---------------------------
Describe: numberOfOccurrencesInText()

TEST: "It should return 0 occurrences of a word for an empty string"
CODE:
const test = "";
const word = "red";
numberOfOccurrencesInText(word, text);
EXPECTED OUTPUT: 0

TEST: "It should return 1 occurrence of a word when the word and the text are the same."
CODE:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
EXPECTED OUTPUT: 1

TEST: "It should return 0 occurrences of a word when the word and the text are different."
CODE:
const test = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
EXPECTED OUTPUT: 0

TEST: "It should return the number of occurrences of a word."
CODE:
const text = "red blue red red red green"
const word = "red"
numberOfOccurrencesInText(word, text);
EXPECTED OUTPUT: 4

TEST: "It should return a word match regardless of case."
CODE:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
EXPECTED OUTPUT: 3

TEST: "It should return a word match regardless of punctuation."
CODE:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
EXPECTED OUTPUT: 3

TEST: "If an empty string is passes in as a word, it should return 0."
CODE:
const word = "";
const text = "red RED Red!";
wordCounter = (word, text);
EXPECTED OUTPUT = 0;

