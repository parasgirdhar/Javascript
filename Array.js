let arr=[3,6,1,2,8,9];
arr.pop();   // It remove last element from array...
console.log(arr);

arr.push(56); // it add new element in last position..
console.log(arr);

arr.shift() // it remove first element from array...
console.log(arr);

arr.unshift(78); // it add element on first in array...
console.log(arr);

console.log(Array.isArray(arr));// it check given list is array or not..


console.log(arr.join("-"));// it add character in array..