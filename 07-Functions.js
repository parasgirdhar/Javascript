function myname(){

console.log("p");
console.log("a");
console.log("r");
console.log("a");
console.log("s");

}

myname();      // myname is refrenece and () this braces is execution.......


// function to add two number below :>


function addTwoNo(num1 , num2){        // here num1 , num2 are called parameters.....
                        
console.log(num1 + num2);

}

addTwoNo(6, 8);       // passing arguments .........



function add(num1 , num2){

    let result= num1+num2;
  console.log(result)
}

add(6,3);


function add(num1 , num2){

return num1+num2;
                                      // learning about return type in js.......
}

let res = add(8 , 9);
console.log(res);



// using of props in in function.........


function log(user){

    return `${user} just logged in`;

}

console.log(log("paras girdhar")); // agr appa arguments vich kuchh pass na krdy ta print hunda undefined..




// hun upar appa chane haa ke agr user ke kuchh bry HI nhi ta oho user nu kahe ke value fill kro..




function call(fetch){

if(fetch == undefined){
console.log("Your data is undefined kindly fill that") ;
        return ;
}

return `${fetch} the API Please `
}

console.log(call());


// appa ess nu ayy ve use kr skty haa  with ..

function call(fetch){

if(!fetch){      // in these we use ! symbol beacuse it work opposite (IF condition) work for true and if we apply (! sign ) it work opposite .......... 

console.log("Your data is undefined kindly fill that") ;  
        return ;
}

return `${fetch} the API Please `
}

console.log(call());




// By deafault .......

function call(fetch ="user call"){     // if we fill data here it never go in if condition or undefined..

if(fetch == undefined){
console.log("Your data is undefined kindly fill that") ;
        return ;
}

return `${fetch} the API Please `
}

console.log(call("developer call"));  // if we fill data here and also in above than this one override that data..........
