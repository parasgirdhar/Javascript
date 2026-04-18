let UserLoggedIn= false;

if(UserLoggedIn){
    console.log("yes he logged")
}
else{
    console.log("no, he's not")
}

// check number and string with double == sign ....

if(2 == "2"){
    console.log("im not strictly checked beacuse of two time == ")
}
else{
    console.log("yes i'm strictly checked")
}

// now strictly checking with ===  three equalto sign ....

if( 3 === "3"){
    console.log("Data is matched")
}
else{
    console.log("data is Mismatched")
}


const userScore = 200;

if(userScore > 100){
    const newUser="UserPassword";
    console.log(`fetched data is ${newUser} `);
}
//  console.log(`fetched data is ${newUser} `);  // error beacuse it is valid inside block scope only..



 let Cash=2000;

 if(Cash > 500 ) console.log("yes money is more");

// it is called Implicit Scope.. in these scope is valid only in one line...

// thats why we use Semicolon at end...
// above condition also work without braces...

// By chance agr ehde nal hor line add krni hai ta jithe semicolon lgaya hai ohde to pehla (, comma) lga ke apne line likh loo...


// Now try with multiple conditions....


let UserPin= 9202;

if(UserPin <= 200){
    console.log("yes, less than 200")
}
else if(UserPin <= 500){
console.log("yes less than 500 greater than 200")
}

else if(UserPin <= 700){
console.log("yes less than 700 greater than 200")
}

else{
    console.log("checked multiple cond.. Work Successfuly")
}


// try with And operator .. 

// condition of And operator is IF both condition is true than ans is true otherwise false....
const UserLogin = true;
const debit= true;
const UserLoggedInFromGoogle = true;
const UserLoggedInFromEmail = false;


if(UserLogin && debit ){
    console.log("yes everything is paid");
}

// also checking with OR operator ..
// if any condition is true ans is true...

if(UserLoggedInFromEmail || UserLoggedInFromGoogle){
    console.log("yes, User Successfuly Logged in");
}