function  CalculateCartItem(num1){

    return num1;
}

console.log (CalculateCartItem(200 , 788, 900, 120));  // this function print only 200...


  // 2nd =>

// to solve this problem we use rest Operator...
//It pack all values in the form of bundle....


function addcart( ...num2){  // here (... is used this is called Rest operator)...
    return num2
}

console.log(addcart(200, 300, 700, 120));  // Now it print all value in the form of array...



// 3rd => 



function cart(val1 , val2, ...num3){
    return num3;
}

console.log(cart(200, 300, 700, 120));  // It print only 700 and 120 beacuse val1 and val2 store 200 and 300 and rest all are returned in output......



// use of functions in object......


let user={
    name : "paras",
    course : "cse",
    category: "developer"
}

function fetchObject(anyobject){
console.log(`user name is ${anyobject.name} and its course name is ${anyobject.course} and category is ${anyobject.category}`)
}

// fetchObject(user);    // it work with these....



fetchObject({
    name:"ashu",
    course:"AI/ML",            // also be used like this......
    category:"blockchain"
})



// =>  used array in function ..

// get second value of an array....


let arr=[34,67,90,98];

function getSecondValue(access){
return access[1];
}

console.log(getSecondValue(arr)); // accessed like this .....

console.log(getSecondValue([400,345,256]));  // also accessed like this..