// Creating a String Object
let userName = new String("paras girdhar");
console.log(userName);


//   This all below are String methods..........


// anchor() → creates an HTML anchor tag
let messageOne = "Hello Paras";
let anchorOne = messageOne.anchor("section1");
console.log(anchorOne);

let messageTwo = "Click Me";
let anchorTwo = messageTwo.anchor("section2");
console.log(anchorTwo);



// at() → returns character at a specific index
let profession = "Developer";

console.log(profession.at(3));
console.log(profession.at(5));



// blink() → wraps text inside <blink> tag (deprecated)
let displayText = "Sample Text";
let blinkText = displayText.blink();
console.log(blinkText);



// bold() → wraps text inside <b> tag
let personName = "Pinki";
console.log(personName.bold());



// concat() → joins two or more strings
let firstWord = "First";
let secondWord = "5";

let combinedText = firstWord.concat(secondWord);
console.log(combinedText);



// length → returns total number of characters
let commandText = "pink-balak---";
console.log(commandText.length);



// toUpperCase() → converts string to uppercase
let communityName = "baniya";
console.log(communityName.toUpperCase());



// toLowerCase() → converts string to lowercase
let mixedCaseWord = "HARsh";
console.log(mixedCaseWord.toLowerCase());



// includes() → checks if a word exists in the string
let foodSentence = "kaju kha lo";

console.log(foodSentence.includes("kao"));
console.log(foodSentence.includes("alo"));



// indexOf() → returns index position of a word
let sentence = "I love JavaScript";

console.log(sentence.indexOf("JavaScript"));



// slice() → extracts a part of the string
console.log(sentence.slice(0,5));



// replace() → replaces a word in a string
console.log(sentence.replace("love", "use"));



// split() → converts string into array
let fruits = "mango,banana,orange,pineapple";
console.log(fruits.split(","));



// trim() → removes extra spaces from start and end
let framework = "   react    ";

console.log(framework);
console.log(framework.trim());



// concat() example again
let greeting = "Hello";
let target = "World";

console.log(greeting.concat(" ", target));