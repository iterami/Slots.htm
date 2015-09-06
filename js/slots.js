'use strict';

function play_round(){
    document.getElementById('number-first').innerHTML = Math.floor(Math.random() * 10);
    document.getElementById('number-second').innerHTML = Math.floor(Math.random() * 10);
    document.getElementById('number-third').innerHTML = Math.floor(Math.random() * 10);

    var dcoins = 0;
    var multiplier = parseInt(document.getElementById('multiplier').value);
    var message = '';

    // If all numbers match...
    if(document.getElementById('number-first').innerHTML === document.getElementById('number-second').innerHTML
      && document.getElementById('number-second').innerHTML === document.getElementById('number-third').innerHTML){
        // ...give player twice as many coins as the numbers that matched.
        dcoins = parseInt(document.getElementById('number-first').innerHTML) * 2 * multiplier;
        message = 'Three Match! +' + dcoins + ' coins!';

    // If first number matches either of the other two numbers...
    }else if(document.getElementById('number-first').innerHTML === document.getElementById('number-second').innerHTML
      || document.getElementById('number-first').innerHTML === document.getElementById('number-third').innerHTML){
        // ...give player as many coins as the first number.
        dcoins = parseInt(document.getElementById('number-first').innerHTML) * multiplier;
        message = 'Two Match. +' + dcoins + ' coins.';


    // If the second and third numbers match...
    }else if(document.getElementById('number-second').innerHTML === document.getElementById('number-third').innerHTML){
        // ...give player as many coins as second number.
        dcoins = parseInt(document.getElementById('number-second').innerHTML) * multiplier;
        message = 'Two Match. +' + dcoins + ' coins.';

    // If no numbers match...
    }else{
        // ...take away two coins from player.
        dcoins = -2 * multiplier;
        message = 'No Match... ' + dcoins + ' coins...';
    }

    coins += dcoins;
    document.getElementById('coins').innerHTML = coins;
    document.getElementById('result').innerHTML = message;
}

function reset(){
    if(!window.confirm('Reset coins?')){
        return;
    }

    coins = 100;
    document.getElementById('coins').innerHTML = coins;
    document.getElementById('number-first').innerHTML = '';
    document.getElementById('number-second').innerHTML = '';
    document.getElementById('number-third').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}

var coins = 100;

window.onkeydown = function(e){
    var key = e.keyCode || e.which;

    // S: play a round.
    if(key === 83){
        play_round();
    }
};

window.onload = function(e){
    document.getElementById('coins').innerHTML = coins;
    document.getElementById('multiplier').value = 1;
};
