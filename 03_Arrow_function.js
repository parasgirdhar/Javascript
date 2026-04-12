
const Arrow={
username: "paras girdhar",
course : "cse",
rollno : 2555458,

  access : function(){

console.log(`${this.username} ,is just loggedIn`);
console.log(`course choosen by ${this.username} is  ${this.course} `);
// console.log(this)          // it helps to access the context of current block or object.....
}
}

Arrow.access();

console.log(this); // it print empty Braces beacuse In global scope we have nothing (empty objet)

// if we do same in console than it print windows 

// v.imp => jo browser de andar  sabto jyada global object hai oho window object hai...
// is krke console vich jdo console.log(this ) likhde hai ta oho global wale emppty ty window show krda hai......


// ***************************** function de andar this *****************************



function test(){
    let username = "Real developer"
    console.log(this.username);
}

test();          // it print undefined it means (this) work good with objects........



// **************** now test with arrow function *****************


let arrow =() => {

let username= "paras";
console.log(this.username);

}

arrow();                 // it also print same undefined.........



// *************************** Arrow function ********************************


// starting syntax  () => { } 

    // than hold it by a variable ....

    let sum = (num1 , num2) =>{
        return num1+num2;
    }

    console.log(sum(5,8));         // it print 13.......


    // another way which is used that is called implicit return ......

    let data = (num1 , num2)=> num1 + num2 ;

    console.log(data(10, 20));

    // ehde andar ke hai ke => ess arrow too baad wali line nu return maan leya janda hai ke aha operation perform krke menu return krdooo........  ehde andar paranthesis te return likhn de lood nhi pandi........


    // agr curle braces use kragy ta return likhna pauga ...

    // jdo return use krde haa ohnu explicit return kehndy hai .. kyoki appa nu explicit return lgana pee rhya hai....


    let fetch = (nums1 , nums2)=>({username : "insane coder"})

    console.log(fetch(90, 45));   // print object through arrow function........