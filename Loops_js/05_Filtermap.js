let arr=[`hello`,`we`,`are`,`devops`]

const fetch = arr.forEach((item)=>{
    return item
    console.log(item)

})   // imp => forEach didn`t return any value....

// hun ehy ta return krda ne pur agr retrun krna hai thoda koi condition lga ke ta apne kol ek filter operation ve hunda hai ehy ve callback hi krda hai...


const values=[1,2,3,4,5,6,7,8,9]

const hold = values.filter((items) => { return items>4 })

console.log(hold);

// ehde andar 5 to 9 print hoya ehny filter krta ty ek variable vich ve values store kr teya....

// v.imp => 14 line complete hon to baad return likhna jaruri aa...
// kyoki agr braces use kra gy {} ta return likhna pauga nhi ta lod ni..

let nums=[1,2,3,4,5,6,7,8,9]

let newnum=[]

nums.forEach((item)=>{
    if(item>4){
newnum.push(item)
    }
})
console.log(newnum)   // another way to print 5 to 9 without filter but we can use anyone..



const users = [
  { id: 1, name: "Aman Verma", age: 22, gender: "Male", mobile: "6280492066" },
  { id: 2, name: "Riya Sharma", age: 25, gender: "Female", mobile: "9123456780" },
  { id: 3, name: "Karan Mehta", age: 28, gender: "Male", mobile: "9988776655" },
  { id: 4, name: "Neha Kapoor", age: 24, gender: "Female", mobile: "9012345678" },
  { id: 5, name: "Arjun Singh", age: 30, gender: "Male", mobile: "9090909090" },
  { id: 6, name: "Pooja Gupta", age: 27, gender: "Female", mobile: "9345678123" },
  { id: 7, name: "Rahul Das", age: 23, gender: "Male", mobile: "9765432109" },
  { id: 8, name: "Sneha Iyer", age: 26, gender: "Female", mobile: "9881122334" },
  { id: 9, name: "Vikram Rao", age: 29, gender: "Male", mobile: "9556677889" }
];

const filterOFUsers = users.filter((data) => data.id === 8)
console.log(filterOFUsers) // jiske id 8 hai usko dhund ke layga.

const result=users.filter((item)=> item.gender.toLowerCase().includes('male'))
console.log(result)  // 

const fest=users.filter((item)=> item.mobile.includes(62804) && item.name.includes(`Aman`))
console.log(fest)  //  agr eho ja koi mobile number hai ty name hougaa object vich vailable ta return krugaa ..