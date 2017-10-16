'use strict';

function repo_init(){
    core_repo_init({
      'keybinds': {
        83: {
          'todo': play_round,
        },
      },
      'storage': {
        'coins': {
          'default': 100,
          'type': 1,
        },
        'multiplier': 1,
        'total': 0,
      },
      'storage-menu': '<table><tr><td><input id=multiplier><td>Multiplier</table>',
      'title': 'Slots.htm',
    });

    document.getElementById('play').onclick = play_round;
}
