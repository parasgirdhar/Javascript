// In js everything is single threaded.........

// javascript Execution Context....types

// 1. Global Execution Context
// 2. Function/Functional Execution Content
// 3. Eval Execution content



let val1=10;
let val2=5;

function addnum(num1, num2){
    let result = num1+num2;
    return result;
}

console.log(addnum(val1 , val2));
 console.log(addnum(10, 2));



 // callstack perfomed in console... snippet real call stack....


 function one(){
    console.log("one")
    two();
 }
  function two(){
    console.log("two")
    three();
 }
  function three(){
    console.log("three")
    
 }