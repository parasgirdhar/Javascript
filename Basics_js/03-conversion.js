// 1. String to Number
let score = "787ab";

console.log(typeof score);   // string

let change = Number(score);
console.log(typeof change);  // number
console.log(change);         // NaN


// 2. Null to Number
let score2 = null;

console.log(score2);         // null

let change2 = Number(score2);
console.log(change2);        // 0


// 3. Undefined to Number
let score3 = undefined;

console.log(score3);         // undefined

let change3 = Number(score3);
console.log(change3);        // NaN


// 4. String "0" to Boolean
let userId = "0";

console.log(userId);         // "0"

let changeId = Boolean(userId);
console.log(changeId);       // true


// 5. Number to String
let number = 56;

let changee = String(number);

console.log(changee);        // "56"
console.log(typeof changee); // string


let app=" ";

let num=Boolean(app);
console.log(num);


// in these we have try different different cases and we analyze this given below...

// "1234" => convert string into number => return {number..}
//  "paras" => convert string into number => return {NAN } => it stands for not a number...

// "paras565"  => convert string into number => return {NAN } => it stands for not a number...

//   "1" => convert string into boolean => return { True }..
//   " " => convert Empty string into boolean => return { 0 }..

//  0 => convert zero into boolean => return { false }..

// 1 =>  convert one into boolean => return { True }..

// 679 => convert number into string => return { 679 in the form of string .. also verify through typeof}

// null => convert null into number => return { 0 }..

// undefined => convert undefined into numbetr => return { NAN };