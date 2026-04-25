const allButton =document.querySelectorAll(`.box`)
const body = document.querySelector(`body`)

allButton.forEach(function(button){
console.log(button);
button.addEventListener(`click`, function(elem){
console.log(elem)
console.log(elem.target)  // ehde nal pta lgdy target aa kitho rhy..
if(elem.target.id === `red`){
   body.style.background= elem.target.id; // agr jitho elem da target aa rehy ohde id agr red hai ta ohda background ve ohii krr dena....

}
if(elem.target.id === `green`){
   body.style.background= elem.target.id; // agr jitho elem da target aa rehy ohde id agr red hai ta ohda background ve ohii krr dena....
   
}
if(elem.target.id === `blue`){
   body.style.background= elem.target.id; // agr jitho elem da target aa rehy ohde id agr red hai ta ohda background ve ohii krr dena....
   
}
if(elem.target.id === `yellow`){
   body.style.background= elem.target.id; // agr jitho elem da target aa rehy ohde id agr red hai ta ohda background ve ohii krr dena....
   
}

})
})