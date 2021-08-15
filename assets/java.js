function generate_array() {

    //generates an array of length set by user input on index page and fills it with random numbers from 1 to 4
    //generate an empty player array with the same length
    let startlev = document.getElementById('g-level').value;
    
    let player_array = new Array();
    player_array.length = startlev;
    //https://www.ma-no.org/en/programming/javascript/how-to-populate-an-array-with-random-numbers-in-javascript
    let game_array = Array.from({
        length: startlev
    //https://www.educba.com/random-number-generator-in-javascript/

    }, () => Math.floor(Math.random() * (4)) + 1);
    game_array.forEach(function (item, index, arr) {
        console.log(item);
    });
    return game_array;
//need to now assign myarray to game_array
}

document.getElementById("start").onclick = function () {
    generate_array()
};




