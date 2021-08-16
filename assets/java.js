function generateArray() {

    //generates an array of length set by user input on index page and fills it with random numbers from 1 to 4
    //generate an empty player array with the same length
    let startlev = document.getElementById('g-level').value;
//we will need some logic to get a new startlev in 
    let playerArray = new Array();
    playerArray.length = startlev;
    //https://www.ma-no.org/en/programming/javascript/how-to-populate-an-array-with-random-numbers-in-javascript
    let gameArray = Array.from({
        length: startlev
        //https://www.educba.com/random-number-generator-in-javascript/

    }, () => Math.floor(Math.random() * (4)) + 1);
    gameArray.forEach(function (item, index, arr) {
        console.log(item);
    });
    return {gameArray, playerArray};
}



function playArray() {
    console.log('hello world');



    //console.log(arrays.game_array);
   // game_array.forEach(myfunction);

   // function myfunction(value, index, array){
   //     alert('test');
        
   // }
}




//because id=start is not on game and id=play is not on index there are type errors
//at some point will be saying if (game_array===player_array) success

/*You could call firstFunction from secondFunction :

function secondFunction() {
    alert(firstFunction());
}
Or use a global variable to host the result of firstFunction :

var v = firstFunction();
function secondFunction() { alert(v); }
Or pass the result of firstFunction as a parameter to secondFunction :

function secondFunction(v) { alert(v); }
secondFunction(firstFunction());
Or pass firstFunction as a parameter to secondFunction :

function secondFunction(fn) { alert(fn()); }
secondFunction(firstFunction);*/