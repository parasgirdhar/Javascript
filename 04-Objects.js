let myobj={
name:"paras",
branch:"CSE",
rollno:2555458,
subject:"Javascript"
}

console.log(myobj.name); // normal way to print...
console.log(myobj.branch);
console.log(myobj["name"]);  // 2nd way to print and good way...

let mysym=Symbol("password");

let pass={
    [mysym]:"newpassword", // if we use square brackets here than while printing object it      automatically say that i'm  a Symbol ....
}

console.log(pass.mysym);
console.log( typeof  pass["mysym"]);


//changing of an object..

myobj.subject="java";

// Object.freeze(myobj);  // it freeze the object after this we cant do any changes in object...

// myobj.name="Dveloper"; // it didnt changed in object beacuse it is used after freeze...
console.log(myobj);

console.log(pass);


myobj.data=function(){
console.log(`belongs to real developer ,${this.name}`);

}
myobj.data();

// this is an object method in JavaScript. We can attach functions to objects, and those functions are called methods. They can access object properties using the this keyword.