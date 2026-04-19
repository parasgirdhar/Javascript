let arr=[1,2,3,4,5];

for(let val of arr){   // use this loop on array....
    console.log(val);
}

// try with string....

let  score  = [`developer`,`is`,`a`, `paras`]
for(let nums of score){
    console.log(nums);
}

// try with string in another way....
let  developer  = [`paras`,`is`,`a`, `developer`]
for(let nums of developer){
    console.log(developer);
}

// Now make map....

const map=new Map()

map.set('IN',`INDIA`)
map.set('USA',`UNITED STATES`)
map.set('MEX',`MEXICO`)
map.set('JPN',`JAPAN`)
map.set('PAK',`PAKISTAN`)
map.set('IN',`INDIA`)

// console.log(map) // one thing to remember js map not allow duplicate value....
// beacuse we write here `india` two times but it didn`t print india two times beacuse map allow only unique values....

// and order of elemets also remain same

for(const [key,value] of map){
    console.log(key ,`:-`, value) // use for of with maps in js
}
// here by writing key and value both we destructure of array...


let myobj={
    name:"paras",
    branch:`cse`,
    rollno:2555458,
    section:`A1`
}

for(let key of myobj){
    console.log(key); // this for of not work on object it show object is not iterable....
}


let obj={
    name:`developer`,
    course:`B.tech`,
     pin:9202,
     Fun:`FetchApi`
}

   for(let key in obj){
    console.log(`${key} ${obj[key]}`); // thats the way to use for of in object..... 
   }
