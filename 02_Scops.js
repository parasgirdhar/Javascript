function one(){

    let user = "paras girdhar";


function two(){

console.log(user);

let website ="chrome";


console.log(website);
}

two();  // child varibale can access parent property but parent variable cant access child property...


}
one();




if(true){

let username = "paras girdhar";

if(username == "paras girdhar"){

let developer = "coder";
    console.log("yes you can access " , developer ," ", username);  // here we can see child can access parent property ......

}

}




// ******************************* important concept ************************************


// 1st type.......


function addOne(num){
return num + 1;

}

console.log(addOne(5));


// 2nd type ......


 let val = function (nums){
return nums+2;

}
console.log(val(10))       // in these our function is hold by a variable .....




// 3rd type........


console.log(data(10));    // here if we write console.log first and than initilize it will work fine in functions........    
function data(add){

    return add+6;
}


// 4th type ........



console.log(fetch(20));        // but here in case where our function is hold by an variable here we write console log first and than initilize function it will give an error......

let fetch = function(nums3){
    return nums3+3;
}

