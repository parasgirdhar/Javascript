const newnum=[1,2,3,4,5,6,7,8,9]

const result=newnum.map((item)=> item+10)

console.log(result)  // using map and adding 10 value in each element

// imp =>  chaning method....

// using operations in a chain form...

const arr=[10,20,30,40,50]
const get = arr.map((value)=> value+10) // it pass value after +10 operation to next map
.map((value)=>value +2) // it print 22, 32, 42, 52, 62
.filter((value)=> value >40) // it print 42, 52, 62 
console.log(get) 

// using of (. reduce)...in function ......

let curr=[1,2,3,4]

const total=curr.reduce( function(init , val){
    console.log(`init is : ${init} val is ${val}`)
return init+val
} , 0)

console.log(total)  // it return =>
// init is : 1 val is 2
// init is : 3 val is 3
// init is : 6 val is 4
// 10


// now using .reduce with arrow function which is mostly used ...

let nums=[5,10,15,20]

const finalSum=nums.reduce((init , curr)=>
    init+curr , 0)
console.log(finalSum) // it return 50 ..


// to check its each step we can also use it in these way ..

let num = [5, 10, 15, 20];

const Sum = num.reduce((init, curr) => {
  console.log(`init is: ${init}, curr is: ${curr}`);
  return init + curr;
}, 0);

console.log(" Sum is :",Sum);  


// real life example with in array objects using (.reduce)..

const shoppingCart = [
  { itemName: "Laptop", price: 55000 
  },
  { itemName: "Headphones", price: 2500 
  },
  { itemName: "Smartphone", price: 30000 
  },
  { itemName: "Keyboard", price: 1200
   },
  { itemName: "Mouse", price: 800
   }
];

const OverAll=shoppingCart.reduce((init ,item)=> init + item.price,0)

console.log(OverAll) // the get the total of overall 89500...

