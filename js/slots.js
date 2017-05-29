'use strict';

function play_round(){
    var dcoins = 0;
    var first = core_random_integer({
      'max': 10,
    });
    var multiplier = parseInt(
      document.getElementById('multiplier').value,
      10
    );
    var result = '';
    var second = core_random_integer({
      'max': 10,
    });
    var third = core_random_integer({
      'max': 10,
    });

    // If all numbers match...
    if(first === second
      && second === third){
        // ...give player twice as many coins as the numbers that matched.
        dcoins = first * 2 * multiplier;
        result = 'Three Match! +' + dcoins + ' coins!';

    // If first number matches either of the other two numbers...
    }else if(first === second
      || first === third){
        // ...give player as many coins as the first number.
        dcoins = first * multiplier;
        result = 'Two Match. +' + dcoins + ' coins.';


    // If the second and third numbers match...
    }else if(second === third){
        // ...give player as many coins as second number.
        dcoins = second * multiplier;
        result = 'Two Match. +' + dcoins + ' coins.';

    // If no numbers match...
    }else{
        // ...take away two coins from player.
        dcoins = -2 * multiplier;
        result = 'No Match... ' + dcoins + ' coins...';
    }

    total += 1;
    result = result + '<br>' + total + ' total games';

    coins += dcoins;
    document.getElementById('coins').innerHTML = coins;
    document.getElementById('number-first').innerHTML = first;
    document.getElementById('number-second').innerHTML = second;
    document.getElementById('number-third').innerHTML = third;
    document.getElementById('result').innerHTML = result;
}

function repo_init(){
    core_input_binds_add({
      'keybinds': {
        83: {
          'todo': play_round,
        },
      },
    });

    document.getElementById('coins').innerHTML = coins;
    document.getElementById('multiplier').value = 1;
    document.getElementById('play').onclick = play_round;
    document.getElementById('reset').onclick = reset;
}

function reset(){
    if(!window.confirm('Reset coins?')){
        return;
    }

    coins = coins_default;

    var ids = {
      'coins': coins,
      'number-first': '',
      'number-second': '',
      'number-third': '',
      'result': '',
    };
    for(var id in ids){
        document.getElementById(id).innerHTML = ids[id];
    }
}

var coins_default = 100;
var coins = coins_default;
var total = 0;
