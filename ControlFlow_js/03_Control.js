// we know all values which are not falsy they all are truthy ....
//  but here are some which needs to remember...

// In a string `false` , `0`, function(){} , " " , []

// here above all are truthy Either they are empty array , function, object, false in a string , 0 value in a string ...
// or IMP :- empty string with space inside is also a truthy value but without space is falsy....

const obj={}

if(Object.keys(obj).length === 0){ // way to check is object is empty or not ....
    console.log("yes it is empty")
}

//Nullish Coalescing Operator (??) JavaScript me ek default value dene ke liye use hota hai — sirf tab jab value null ya undefined ho.

let a;

a= null ?? 5;
console.log(a);

let b;

b= null ?? undefined;
console.log(b);


let access;

access= 0 ?? 15;
console.log(access);

let data;

data= 67 ?? null;
console.log(data);


let name = null;
let username = name ?? "Guest";

console.log(username); // Guest



// Using ternary operator ...  condition ? true : false ..
const price = 70;

price >= 40 ? console.log(`yes it is greater than 40`) : (`no it is not `)