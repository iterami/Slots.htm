function play_round(){
    document.getElementById('number-first').innerHTML = Math.floor(Math.random() * 10);
    document.getElementById('number-second').innerHTML = Math.floor(Math.random() * 10);
    document.getElementById('number-third').innerHTML = Math.floor(Math.random() * 10);

    // if all numbers match
    if(document.getElementById('number-first').innerHTML == document.getElementById('number-second').innerHTML
      && document.getElementById('number-second').innerHTML == document.getElementById('number-third').innerHTML){
        document.getElementById('result').innerHTML = 
          'Three Match! +'
          + (parseInt(document.getElementById('number-first').innerHTML) * 2)
          + ' coins!';

        // give player twice as many coins as the numbers that matched
        coins += parseInt(document.getElementById('number-first').innerHTML) * 2;

    // if first number matches either of the other two numbers
    }else if(document.getElementById('number-first').innerHTML == document.getElementById('number-second').innerHTML
      || document.getElementById('number-first').innerHTML == document.getElementById('number-third').innerHTML){
        document.getElementById('result').innerHTML = 
          'Two Match. +'
          + document.getElementById('number-first').innerHTML
          + ' coins.';

        // give player as many coins as the first number
        coins += parseInt(document.getElementById('number-first').innerHTML);

    // if the second and third numbers match
    }else if(document.getElementById('number-second').innerHTML == document.getElementById('number-third').innerHTML){
        document.getElementById('result').innerHTML = 
          'Two Match. +'
          + document.getElementById('number-second').innerHTML
          + ' coins.';

        // give player as many coins as second number
        coins += parseInt(document.getElementById('number-second').innerHTML);

    // if no numbers match
    }else{
        document.getElementById('result').innerHTML = 'No Match... -2 coins...';

        // take away two coins from player
        coins -= 2;
    }

    // update coins
    document.getElementById('coins').innerHTML = coins;
}

function reset(){
    if(confirm('Reset?')){
        coins = 100;
        document.getElementById('coins').innerHTML = coins;
        document.getElementById('number-first').innerHTML = '';
        document.getElementById('number-second').innerHTML = '';
        document.getElementById('number-third').innerHTML = '';
        document.getElementById('result').innerHTML = '';
    }
}

var coins = 100;

document.getElementById('coins').innerHTML = coins;

window.onkeydown = function(e){
    var key = window.event ? event : e;
    key = key.charCode ? key.charCode : key.keyCode;

    if(key == 83){ // S
        play_round();
    }
};
