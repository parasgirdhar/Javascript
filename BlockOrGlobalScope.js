
//  IMP =>  global scope is accessable inside block scope but from inside block scope nothing is accessable in global scope....


let a=10;
const b=20;
var c=89;




if(true){
  let a=10;         //block scope.......
const b=20;
var c=89;  // The problem is it is acessable outside the block also......
}


console.log(a);    // this gives error...
console.log(b);     // this one also give error....
console.log(c);      // but this will run this is the problem beacuse it break the rule wecant access varibale outside from block scope....


let a=344;

if(true){
    let a=56;
    console.log("Inner Block : " , a);  // this is block scoped
}

console.log(a);