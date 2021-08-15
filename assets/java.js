function generate_array() {

    //generates an empty array of length set by user input on index page
    let startlev = document.getElementById('g-level').value;
    var game_array = new Array(); //might need var rather than let (block v global scope)
    game_array.length = startlev;
    console.log(game_array);
    //https://www.ma-no.org/en/programming/javascript/how-to-populate-an-array-with-random-numbers-in-javascript
    let myarray = Array.from({
        length: startlev
    }, () => Math.floor(Math.random() * (4)) + 1);
    myarray.forEach(function (item, index, arr) {
        console.log(item);
    });
    return game_array;

}

function generate_random() {
    //this needs to generate a random color from 4 colors
    let blue = 1;
    let green = 2;
    let red = 3;
    let yellow = 4;
    //https://www.educba.com/random-number-generator-in-javascript/
    let test = Math.floor(Math.random() * (4)) + 1; //hopefully this produces a number between 1 and 4
    alert(test);
}

function test() {
    console.log('test');
}

document.getElementById("start").onclick = function () {
    generate_array()
};
//for (let i=0; i<10; i++){
//game_array.push(generate_random())
//}



//going to be something like game_array.append(generate_random)
//startlev needs to be in generate_random, so you generate
//i need to push onto the array game_array.push()