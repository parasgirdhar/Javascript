// Ways of using and Merging arrays..


let arr=[4,3,78];

 let nums=[5,2,1,8];

  arr.push(nums);  // this is Push ...
  console.log(arr);


// output : -> [ 4, 3, 78, [ 5, 2, 1, 8 ] ]

// we use push when we want to merge two array and want the output in nested form ...than we use Push  





let arr=[4,3,78];

 let nums=[5,2,1,8];   

 const all=[...nums, ...arr]  // ...(This is spread operator )
console.log(all);


// output : ->   [  5, 2,  1, 8,  4, 3, 78]


// Spread operator (...) is used to expand (spread) elements of an array 
// or iterable into individual elements. It is commonly used to merge arrays
// or copy them.
// It return the array in single and clear form ...





let arr=[4,3,7,[8,6,9],0,[6,1,2,3,5,[6,3]]];

let nums=arr.flat(Infinity);
console.log(nums);

// output : -> [  4, 3, 7, 8, 6, 9,  0, 6, 1, 2, 3, 5, 6, 3]


// flat(Infinity) = “sab nested arrays ko khol ke ek line mein bna deta hai"....





 let nums="paras";

 console.log(Array.from(nums));

// output : ->  ['p', 'a', 'r', 'a',  's']
  



// console.log(typeof result); // it changes anything into array and when we check its type it show object beacuse The type of array is object...
// and when we pass string as input it convert into array and break its in the form of characters


let arr=["paras"];

 console.log(Array.from({name : "kirat"})); // It return empty braces 



let arr="server"
let arr1="client"
let arr2="developer";
let arr3="user"

console.log(Array.of(arr,arr1,arr2,arr3));


// output : ->  [ 'server', 'client', 'developer', 'user' ]

// It also convert String and number into array but it didnt break String into charcters it return same as we give in input..


