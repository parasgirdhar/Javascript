let num=new Number(56);
console.log(num);

console.log(num.constructor);


// toString();

let change=(num.toString());
console.log(typeof change);  // change Number into String....

//      toFixed(enter value);

let nums=new Number(5.136289);
console.log(nums.toFixed(4)); // jine value likho decimal to baad oho numbers ve print ho jaan gy ...

let curr=new Number(56.789);
console.log(curr.toPrecision(4));



//         toLocalString(('en-IN'))    ......

let pos=new Number(5638464);
console.log(pos.toLocaleString("en-IN"));  // make easy to count value by adding commas in that...


