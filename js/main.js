'use strict';

function repo_init(){
    core_repo_init({
      'info-events': {
        'play': {
          'todo': play_round,
        },
      },
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
}
