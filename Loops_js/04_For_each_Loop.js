let arr=[`paras`, `is`,`a`,`real`,`developer`]

for(let key in arr){
    console.log(arr)
}

// output :-
// 0
// 1
// 2       beacuse in (for in) by default keys of array is start from 0....
// 3
// 4

// but if we use array in (for of ) that print only that element which are present in array not numbers 0,1,2,3....


// values print kran vasty ayy likhna pau ga...

for(let key in arr){
    console.log(arr[key]) // ehy values nu print kran wala tareka...
}




//************************* Using For-each very Imp***************


let score=[`lets`,`check`,`for-each`,`function`]

// score.forEach(function (val){
// console.log(val);
// })

// now hun dekhdy aa ehda structure kive likhna aa ..
// sab to pehla appa ek normal array bnaya 29 no. line vich ..
// ess to bad appa apne array da name likhya fir (. dot) lgaya oss to baad forEach likhya fir appa pehla normal jive function likhdy aa ovy likh leya ...

// function name(){} ... name da matlab aa function da name...
// pur kyoki ehy callback function hai ess krky ehda name hunda hi nhi hun ke reh gya apne kol function(){} .. enna bachya ess to baad kyoki ehy smart function hai ehy apne app array vicho elements chuck lu gaa ess krky ehy () barcket vich array da name likh dy ho gya km....  



// hun same chij use with arrow function....

// score.forEach((item)=> {
//     console.log(item)
// })


// function printme(item){
//     console.log(item)
// }
//                             // ehy ve ek way aa print krn daa
// score.forEach(printme)     // ehy refrence pass kr rhy...

score.forEach((item,  index,list)=>{
console.log(item,index,list)
})          // ess tareke apa arrow funtion vich forEach dee use nal array de items una da index value ty list ve print kr skty a..


let fetch=[
    {
        languageName:`java`,
        coursePrice:500,
        duration:`2 Month`
    },
    {
        languageName:`python`,
        coursePrice:700,
        duration:`1.5 Month`
    },
    {
        languageName:`web-dev`,
        coursePrice:1000,
        duration:`3-Month`
    },
    {
        languageName:`javascript`,
        coursePrice:800,
        duration:`2.2-Month`
    }
]

fetch.forEach((item)=>{
console.log(item.languageName)  // dekeya kine asani nal appa ek array de andro multiple objects da data ek sath fetch kr leya...
})

// output:-
// java
// python
// web-dev
// javascript
