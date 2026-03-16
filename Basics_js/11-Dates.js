let mydate=new Date();
console.log(mydate.toISOString());

console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString ());

console.log(typeof mydate);

let userdate=new Date(2003,0,2);
console.log(userdate.toLocaleString());

let convert = Date.now();
let date = new Date(convert);
console.log(date.toLocaleString());

date.toLocaleString(`default`, {
    dayPeriod:'short'
} )
