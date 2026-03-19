let arr=[4,5,7,2,8];
console.log(arr.slice(0,3));   // slice(* ,  * );     return us the particular elements in series ...



let a=[4];
let b=[9];
let c=[3];
let result=a.concat(b,c);   // concat();     helps to merge two or more arrays into one....
console.log(result);


let arr=[6,9,3,2,5];
console.log(arr.toReversed());   // toReversed();  It helps to reverse the array...




let arr=[6,9,3,2,5];
console.log(arr.slice(3));   //  output ->   [ 2, 5 ]     In these slice(*)  

console.log(arr.slice(1));  // output ->  [ 9, 3, 2, 5 ]   

// slice(3) means:
// 👉 Start from index 3 and go till the end .. it ignore the element on 0, 1, 2 




let arr=[8,4,9,2,3,1,0];
console.log(arr.toSorted());   //  toSorted()  sort the array also negative elements...
