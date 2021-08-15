function generate_array() {

    //generates an empty array of length set by user input on index page
    let startlev = document.getElementById('g-level').value;
    let game_array = new Array(); //might need var rather than let (block v global scope)
    game_array.length = startlev;
    console.log(game_array);
    //https://www.ma-no.org/en/programming/javascript/how-to-populate-an-array-with-random-numbers-in-javascript
    let myarray = Array.from({
        length: startlev
        //https://www.educba.com/random-number-generator-in-javascript/

    }, () => Math.floor(Math.random() * (4)) + 1);
    myarray.forEach(function (item, index, arr) {
        console.log(item);
    });
    return game_array;

}

document.getElementById("start").onclick = function () {
    generate_array()
};




