function wheelBtn(){
    wheelSpin();
    tryModal();
    overlayDiv();
    rouletteAudio();
    defeatSoundEffect();
}

function wheelSpin() {
    let element = document.getElementById("wheel-gif"); //ID from the img tag
    element.classList.remove('d-none');

    setTimeout(function() {
        element.classList.add('d-none');
    }, 5000);
}

function tryModal() {
     let image = document.getElementById("try-again"); //ID from the img tag
     image.src ="./assets/Spin-the-wheel.png" //img source
     
     setTimeout(function() {
     document.getElementById('try-again').style.visibility='visible'
     }, 5000);
 }

 function overlayDiv() {
     let overlay = document.getElementById("overlay"); //ID from the img tag
     
 
     setTimeout(function() {
     document.getElementById('overlay').style.visibility='visible'
     }, 5000);
 }

 //Start of sound effects

 function rouletteAudio(){
    var rouletteSound = new Audio("./assets/Spinning Wheel.mp3");
    rouletteSound.currentTime=0;
    rouletteSound.play();
    setInterval(function() {
        if(rouletteSound.currentTime > 4){   /** Working **/
            rouletteSound.pause();
        }
    }, 1000);
}

function defeatSoundEffect() {
    var defeatSound = new Audio("./assets/Defeat Sound Effect.wav");

    setTimeout(function() {
    defeatSound.play();
    }, 5000);
}

// Second spin

function secondSpinAudio(){
    var secondSpinSound = new Audio("./assets/Spinning Wheel.mp3");
    secondSpinSound.currentTime=0;
    secondSpinSound.play();
    setInterval(function() {
        if(secondSpinSound.currentTime > 4){   /** Working **/
        secondSpinSound.pause();
        }
    }, 1000);
}

function winSoundEffect() {
    var winSound = new Audio("./assets/Win Sound Effect.wav");

    setTimeout(function() {
    winSound.play();
    }, 5000);
}

// End of Sound effects
 


 function remove_image(){
 document.getElementById('try-again').remove();
 }

 function remove_div(){
     document.getElementById('overlay').remove();
 }	

function nextTryBtn(){
    remove_image();
    remove_div();
    wheelSpin();
    winModal();
    nextOverlay();
    secondSpinAudio();
    winSoundEffect();
}

//2nd try
function winModal() {
     let image = document.getElementById("you-win"); //ID from the img tag
     image.src ="./assets/you-win.png" //img source
 
     setTimeout(function() {
     document.getElementById('you-win').style.visibility='visible'
     }, 5000);
 }

 function nextOverlay() {
     let overlay = document.getElementById("overlay2"); //ID from the img tag
     
 
     setTimeout(function() {
     document.getElementById('overlay2').style.visibility='visible'
     }, 5000);
 }
