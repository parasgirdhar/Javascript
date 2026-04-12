
// (function showUser() {
//     let username = "paras";
//   console.log("User is:", username);
// })();


//  Immediately Invoked function Expression   ( IIFE )..............

let data = 920;
function normal(){
    console.log(`accessd database is ${data}`);
}
normal();


(function IIFE(){
let data = "920";
    console.log(`After IIFE testing data is ${data}`);

})();

// When we use IIFE first we pack our full function in first () paranthesis and then immediately call with sencond () brackets....



// *********************** why we used IIFE ********************************* 

// Function banta bhi hai aur turant run bhi ho jata hai
//  Aur apna private space (scope) create karta hai

//  IMP => It Avoid global pollution

// Variables global scope me leak nahi hote

//  Create private scope

// Data ko hide kar sakte ho (encapsulation)

// Immediate execution

// Code ko turant run karna ho (setup/init logic)

// always use semicolon at the end of IIFE function to stop that after Invoked ....


// ************************ Use IIFE with arrow function ************


let r=(()=>{
    console.log(`database connected again`);
}
)();
  
// in case of arrow function we can use braces from the function not from the variable ...



// **************** passing arguments to IIFE function in arrow function *************


let dev = ((nums) =>{
   console.log(`arguments are also ${nums}`)
}) (`testing`);       // this is also called named IIFE Beacuse we pass here arguments and use $ sign..
 
// And where we dont pass arguments we called that simple IIFE...

