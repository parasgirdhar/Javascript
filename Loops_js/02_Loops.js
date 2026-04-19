// using normal while loop....

let temp=1;
while(temp <= 10){
    console.log(`this is temp ${temp}`)
   temp= temp+2;
}

// using while loop with array.....
let arr=[`paras`,`is`,`a`,`real`,`developer`]
let myarr=0;
while(myarr < arr.length){
    console.log(` ${arr[myarr]}`)
    myarr=myarr+1;
}

// using do-while....

let score =1;
do{
    console.log(`score is : ${score}`)
    score++;
} while(score <=10)