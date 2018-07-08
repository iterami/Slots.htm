'use strict';

function play_round(){
    let dcoins = 0;
    let first = core_random_integer({
      'max': 10,
    });
    let result = '';
    let second = core_random_integer({
      'max': 10,
    });
    let third = core_random_integer({
      'max': 10,
    });

    // If all numbers match...
    if(first === second
      && second === third){
        // ...give player twice as many coins as the numbers that matched.
        dcoins = (first * 3) * core_storage_data['multiplier'];
        result = 'Three Match! +' + dcoins + ' coins!';

    // If first number matches either of the other two numbers...
    }else if(first === second
      || first === third){
        // ...give player as many coins as the first number.
        dcoins = first * core_storage_data['multiplier'];
        result = 'Two Match. +' + dcoins + ' coins.';


    // If the second and third numbers match...
    }else if(second === third){
        // ...give player as many coins as second number.
        dcoins = second * core_storage_data['multiplier'];
        result = 'Two Match. +' + dcoins + ' coins.';

    // If no numbers match...
    }else{
        // ...take away two coins from player.
        dcoins = -2 * core_storage_data['multiplier'];
        result = 'No Match... ' + dcoins + ' coins...';
    }

    core_storage_data['coins'] += dcoins;
    core_storage_data['total'] += 1;

    document.getElementById('number-first').innerHTML = first;
    document.getElementById('number-second').innerHTML = second;
    document.getElementById('number-third').innerHTML = third;
    document.getElementById('result').innerHTML = result;

    core_storage_update();
}
