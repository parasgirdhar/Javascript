const clock = document.querySelector(`#clock`)

   setInterval(function (){  // kise function nu vaar vaar ek set interval baad update krn lyyi use hunda hai 
let date = new Date();   // aha new Date(); pre defined hai....
console.log(date.toLocaleTimeString());

   
   },1000) // 1000 milisecond vich count hunda hai ethy....  


// *************** hun ehy continuosly work kr rhyy hai pur ehy console vich aa rhya hai appa ess nu 
// normal output vich apne digital clock ty show krna hai ....



//  ******************** ehy output wasty upar wala console wasty *********************

const clock= document.querySelector(`#clock`)


setInterval(function (){
    let date = new Date();      // ehy time change kru ga har second kyoki ehnu interval function vich pa ta...
clock.innerHTML = date.toLocaleTimeString();
},1000)


