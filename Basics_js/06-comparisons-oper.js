console.log(1 > 2); 
// false — kyunki 1 chhota hai 2 se

console.log(3 != 7); 
// true — != ka matlab hai "not equal", aur 3 aur 7 equal nahi hain

console.log(0 == null); 
// false — null sirf undefined ke equal hota hai, 0 ke nahi

console.log(5 == 5); 
// true — dono values same hain

console.log(0 >= null); 
// true — comparison mein null ko JavaScript number 0 mein convert kar deta hai
// to comparison ban jata hai: 0 >= 0 → true

console.log(undefined >= 0); 
// false — undefined number mein convert ho kar NaN ban jata hai
// NaN kisi bhi number se compare ho to result false hota hai

console.log(undefined >= null); 
// false — undefined → NaN aur null → 0
// comparison ban jata hai: NaN >= 0 → false

console.log("6" > 8);  
// false — yahan type coercion hoti hai
// JavaScript string "6" ko number 6 mein convert kar deta hai
// phir comparison hota hai: 6 > 8 → false

console.log("10" > "2");
// false — yahan dono values string hain
// jab 2 strings compare hoti hain to JavaScript unko alphabetically compare karta hai
// "10" aur "2" mein pehla character "1" aur "2" compare hota hai
// "1" chhota hai "2" se isliye result false


// ( == ) double == means it just check "4" > 4 it return here true..

// ( === ) here it means "strictly chcek of data-type" it means if i type here "7" === 7 it give here false..

console.log("7"===7) // strictly checking...

console.log("5"==5)  //  normal checking here return true..




// In professional code, we usually avoid this kind of conversion with null and undefined..

// because their behavior can be inconsistent.

// We giv