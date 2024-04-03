console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
//  I JUST WROTE THIS WITHOUT LOOKING INTO THE STEPS. THE CORRECT EXERCISE IS JUST BELOW LABELED 1.1

// function sumArray(Numbers) {
//   let sum = 0;
//   for (let i = 0; i < Numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// const numbers = [74, 576, 746, 75, 98];
// output = 1569
// console.log(sumArray(numbers));

// Exercise 1.1
function arraySum(numbers) {
  let sum = 0;
  numbers.forEach((number, index) => {
    sum += number;
  });
  return sum;
}

const numbers = [4, 347, 834, 745, 76];
console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let book = {};

book.title = "The Linux Bible";
book.author = "Christopher Negus";
book.pages = 928;
book.readCount = 2;

book.info = function () {
  return `${this.title} by ${this.author} is by far one of my favorite books of all time. It has ${this.pages} pages filled with information about the linux operating system. I have read it ${this.readCount} times.`;
};

console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let sentence = "The quick brown fox jumps over the lazy dog";

// FIRST CONVERT THE STRING INTO AN ARRAY OF WORDS
// ABSOLUTELY HAD TO GOOGLE HOW THIS WAS DONE!!!!
let wordsAndSpaces = sentence.split(/(\s+)/);

// ITERATE OVER EACH WORD IN THE ARRAY
for (let i = 0; i < wordsAndSpaces.length; i++) {
  if (wordsAndSpaces[i] === " ") continue;

  // THEN CONVERT EACH WORD INTO AN ARRAY OF INDIVIDUAL CHARACTERS
  let chars = wordsAndSpaces[i].split("");
  // THEN REVERSE EACH ARRAY OF CHARACTERS AND UPDATE THE ARRAY OF WORDS
  wordsAndSpaces[i] = chars.reverse().join("");
}

// CONVERT THE ARRAY OF REVERSED WORDS BACK INTO A SINGLE STRING VALUE
sentence = wordsAndSpaces.join("");
// LOG SOLUTION TO THE CONSOLE
console.log(sentence);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
// STARTING CODE TO BE PARSED
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
// DEFINING VARIABLES TO BE USED
let rows = csvData.split("\n");
let headers = rows[0].split(",");
let result = [];

// FOR LOOP TO ITERATE OVER EACH REMAINING ROW IN THE ARRAY
for (let i = 0; i < rows.length; i++) {
  let values = rows[i].split(",");
  let obj = {};
  for (let j = 0; j < headers.length; j++) {
    obj[headers[j]] = values[j];
  }

  result.push(obj);
}

console.log(result);
