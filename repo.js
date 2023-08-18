'use strict';

function play_round(){
    let dcoins = 0;
    const value1 = core_random_integer({
      'max': 10,
    });
    let result = '';
    const value2 = core_random_integer({
      'max': 10,
    });
    const value3 = core_random_integer({
      'max': 10,
    });

    if(value1 === value2
      && value2 === value3){
        dcoins = (value1 * 3) * core_storage_data['multiplier'];
        result = 'Three Match! +' + dcoins + ' coins!';

    }else if(value1 === value2
      || value1 === value3){
        dcoins = value1 * core_storage_data['multiplier'];
        result = 'Two Match. +' + dcoins + ' coins.';

    }else if(value2 === value3){
        dcoins = value2 * core_storage_data['multiplier'];
        result = 'Two Match. +' + dcoins + ' coins.';

    }else{
        dcoins = -2 * core_storage_data['multiplier'];
        result = 'No Match... ' + dcoins + ' coins...';
    }

    core_storage_data['coins'] += dcoins;
    core_storage_data['total'] += 1;

    document.getElementById('value1').textContent = value1;
    document.getElementById('value2').textContent = value2;
    document.getElementById('value3').textContent = value3;
    document.getElementById('result').textContent = result;

    core_storage_update();
}

function repo_init(){
    core_repo_init({
      'events': {
        'play': {
          'onclick': play_round,
        },
      },
      'keybinds': {
        13: {
          'todo': play_round,
        },
      },
      'storage': {
        'coins': 100,
        'multiplier': 1,
        'total': 0,
      },
      'storage-menu': '<table><tr><td><input class=mini id=multiplier step=any type=number><td>Multiplier</table>',
      'title': 'Slots.htm',
    });
}
