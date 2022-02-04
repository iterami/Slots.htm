'use strict';

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
