

// const tinderUser= new Object();    // this is a Single ton object...

const tinderUser={};      // This is a non- Single ton Object.....


tinderUser.id="123@abc";

tinderUser.name="paras-Girdhar";

tinderUser.IsloggedIN="True";

// console.log(tinderUser);   



let RegularUser ={
                                  // making object ke andar ek or object....
    name:"paras",

    fullname: {
     RealName:"paras",
     sirname:"Girdhar",
    }

}

console.log(RegularUser.fullname);  // agr sirname ko access krna hai too (. dot ka use krna padyga)..



// Merging of two Objects into one.......

const obj1={ 1:"a", 2: "b", 3:"c"};

const obj2={ 1:"a", 2: "b", 3:"c"};

let obj3 = Object.assign({}, obj1, obj2);   // The empty paranthesis which used here is to store merge 

// result in theses paranthesis.......

console.log(obj3);                     







