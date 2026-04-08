
const obj1={ 1: "a" , 2: "b"};

const obj2={ 1: "a" , 2: "b"};

const obj3={...obj1 , ...obj2};

console.log(obj3);                // Using Split Operator for merging ......

const user={

name: "paras",
branch : "cse",
rollno : 2555458,                    
section : "4A1"
}

console.log(Object.keys(user));             // printing the keys used in Array...
console.log(Object.values(user));           // printing the values used in Array ...


console.log(Object.entries(user));         // printing the whole array into key value pair....

// ]
//   [ 'name', 'paras' ],
//   [ 'branch', 'cse' ],
//   [ 'rollno', 2555458 ],              // It print like this in key value pair form.....
//   [ 'section', '4A1' ]
// ]

console.log(user.hasOwnProperty('name'));       // ehy(.hasOwnProperty) check krda hai ke ehe chij ess array de andar hai ya nhi  for ex.. name ta ehne return kite true......