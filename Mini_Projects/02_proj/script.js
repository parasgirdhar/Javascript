const form = document.querySelector(`form`)

form.addEventListener(`submit`, function(elem){
elem.preventDefault();


const height = parseInt(document.querySelector('#height').value);// kioki sirf value likhni hai appa ta (.value)
const weight = parseInt(document.querySelector('#weight').value);  // parseINT ta lgayy agr value string vich hovy ta apy hi number vich convert kr devy...
const result = document.querySelector(`#results`)

if(height === `` || height < 0 || isNaN(height)){
    result.innerHTML=`please enter a valid number ${height}`;
}
else if(weight === `` || weight < 0 || isNaN(weight)){
    result.innerHTML=`please enter a valid number ${weight}`;
}else{
 const bmi =  (weight / ((height * height) / 10000)).toFixed(2);

 if(bmi<18.6){
    result.innerHTML= result.innerHTML=`${bmi} you are Underwait `;
}
else if(bmi<=24.9){
    result.innerHTML=result.innerHTML=`${bmi} you are Normal `;
}
else{
    result.innerHTML=result.innerHTML=`${bmi} you are OverWait `;
}

}

})