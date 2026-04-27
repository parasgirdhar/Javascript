let Random = parseInt(Math.random()*100 +1) // user to random number len liye..
// m    Math.random appa nu koi random number generate krke dendy har vaar alag alag appa kita *100 ta ke decimal de edhar aa jyvalue  hu ehy dendy value b/w 0 - 99 pur 0 appa nu chahida ni ta appa +1 likh ta hun value deuga 1 - 100

const submit = document.querySelector(`#subt`);
const UserInput = document.querySelector(`#guessField`);
const guessSlot = document.querySelector(`.guesses`);
const Remaining = document.querySelector(`.lastResult`);
const lowOrHi = document.querySelector(`.lowOrHi`);
const StartOver = document.querySelector(`.ResultPara`);


const p = document.createElement(`p`);


let previousGuess = [] ;  //user dy previous guess store krn wasty...

let numGuess = 1;  //tell the number of guesses user used and  user dy guesses 1 to start kra gy....

let playGame = true ;    // game start krn wasty ....


if(playGame){ // ehnu upar true kita hai game start hoju
    submit.addEventListener(`click` , function (elem){ // click ty event Listner lga ta ..
        elem.preventDefault(); // input nu server ty ne jan deugaa ethy hi rok lu ga
        const guess = parseInt(UserInput.value); // value hi lauga 
    
        validateGuess(guess); // pass guess to next ValidateGuess fun...  
    })
}


   // Ehy function check kru ga jo user value de rhy valid hai ve ke nhi ... user 100 to vaddi value na devy , koi number to alwa hor kuchh na bhr less than ya 0 na bhry... =>
function validateGuess(guess){

if(isNaN(guess)){
alert(`Please Enter a Valid Number`);
}
else if(guess < 1){
(`Please Enter a Number greater than zero`);
}
else if(guess > 100){
(`Please Enter a Number Less than hundred`);
}
else{
    previousGuess.push(guess)//user dy guess nu push krda jauga har vaar ....
    if(numGuess === 11){ // check ke user dy no. 11 ho gy ta game rokda..
      displayGuess(guess); // guesses nu show krugaa game dy end hon ty ..
      displayMessage(`Game Over! The random number was ${Random}`);// game nu rokan too bad message show kru ga ty nal ohde bhre hoyy random values ve show krugaa...
     endGame();  // game nu end kr dugaa..
      }
      else{
        displayGuess(guess);// hun ethy tak appa nu pty 11 to value hamesha niche hi augee or array vich push ve ho rhi hai pur appa fir ve har vaar show krni hai ....
        CheckGuess(guess); // check ve krni hai har varr
      }
}

}

// check kru gaa...

function CheckGuess(guess){
    if(guess === Random){
        displayMessage(`you guess it right`);
        endGame();
    }
    else if(guess < Random){
        displayMessage(`Number is too low`);
    }
     else if(guess > Random){
        displayMessage(`Number is too High`);
    }
}

// message nu display krugaa....

function displayGuess(guess){

UserInput.value=``; // UserInput nu clean krr rhy haa
guessSlot.innerHTML += `${guess} , ` // guess nu  push kr rhy aa
   numGuess++;   // numguess nu har var increase kr rhy haa...
   Remaining.innerHTML =`${11 - numGuess}`;
}


function displayMessage(message){
lowOrHi.innerHTML=`<h2>${message}<h2/>`
}


function endGame(){
UserInput.value=``;   // clean krta...
UserInput.setAttribute(`disabled`, ``); // game vich user input disable krtii (`disabled`, ``) ethy second wala `` ta dety kyoki ehy key pair value hunda hai 
p.classList.add(`button`) // ek button add krta 
p.innerHTML=`<h2 id="newGame">Start New Game<h2/>`; // fir dobara new game satrt krn wasty ...
playGame = false;  // play game nu false krta ....
StartOver.appendChild(p);
newGame();
}

function newGame(){

const newGameButton = document.querySelector(`#newGame`);
newGameButton.onclick= function(elem){ // ethy ve event use hoy onClick
Random = parseInt(Math.random()*100 +1);
UserInput.value = ``;
numGuess=1;
previousGuess = [];
guessSlot.innerHTML=``;
UserInput.removeAttribute(`disabled`);
Remaining.innerHTML =`${11 - numGuess}`
StartOver.removeChild(p);
 playGame = true

}
}

// ehy newgame wala sara kuchh reset krke dobara too start krr dugaa....
