// primitive data types are..

// string , number, undefined , null , bigInt, boolean, symbol..

// non-primitive data types are...

// arrays, objects, functions...

let a = 10;
a = "Hello";

console.log(a);

// with this above example we understand that js is a static typed language ...

//Jo language program me variable ka data type pehle define karwati hai aur compile time par check karti hai use statically typed language kehte hain.

// const id=symbol("123");

// const anotherid=symbol("123");

// console.log(id === anotherid);

const id = Symbol("123");
const anotherid = Symbol("123");

if(id==anotherid){
    console.log(true)
}else{
    console.log(false) 
}

let  Bignumber=7348466976596965498698n;

// now the above number is automatically bigInt if we type n in the end of it....


// this all are non-primitive in below...

let arr=[2,4,4,5,6];

let createobject = {
    name: "paras",
    age: 22,
    pincode: 152101,
    address: "Giddarbaha",  
}

let sumfuncation= function(){
    let a=45;
    let b=78;
    let c=a+b;
    console.log(c);
}

console.log(sumfuncation());

console.log(typeof sumfuncation); // function..

console.log(typeof createobject); // object

console.log(typeof arr); // object..