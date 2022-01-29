'use strict';

function play_round(){
    let dcoins = 0;
    const first = core_random_integer({
      'max': 10,
    });
    let result = '';
    const second = core_random_integer({
      'max': 10,
    });
    const third = core_random_integer({
      'max': 10,
    });

    if(first === second
      && second === third){
        dcoins = (first * 3) * core_storage_data['multiplier'];
        result = 'Three Match! +' + dcoins + ' coins!';

    }else if(first === second
      || first === third){
        dcoins = first * core_storage_data['multiplier'];
        result = 'Two Match. +' + dcoins + ' coins.';

    }else if(second === third){
        dcoins = second * core_storage_data['multiplier'];
        result = 'Two Match. +' + dcoins + ' coins.';

    }else{
        dcoins = -2 * core_storage_data['multiplier'];
        result = 'No Match... ' + dcoins + ' coins...';
    }

    core_storage_data['coins'] += dcoins;
    core_storage_data['total'] += 1;

    document.getElementById('number-first').textContent = first;
    document.getElementById('number-second').textContent = second;
    document.getElementById('number-third').textContent = third;
    document.getElementById('result').textContent = result;

    core_storage_update();
}
