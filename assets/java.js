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

    }, () => `sq` + (Math.floor(Math.random() * (4)) + 1));
    //gameArray.forEach(function (item, index, arr) {
    //  console.log(item);
    //}
    //)

    return [gameArray, playerArray]; //needed to ensure the data goes into localstorage

}



function playArray(gameArray) {
    //https://www.telerik.com/blogs/how-do-i-pause-execution-in-javascript
    alert(Array.isArray(gameArray));
    alert('this should be the pattern, switch statement didnt work');

    function readDict(book) {
        alert('book');
    }
    gameArray.forEach(readDict);
    //now to put the alert in the dictionary

}


function playerArray() {
    var pArray = []; //empty array to hold player attempt
    var pAl = pArray.length; //for comparison with length of gamearray
    var testLength = JSON.parse(localStorage.getItem("gameJSON"))[0].length; //for comparison with length of pAl
    const gArray = JSON.parse(localStorage.getItem("gameJSON"))[0]; //game data
    //https://code-institute-room.slack.com/team/U01N3V9MFAP
    //event listener (click) for all elements class 'square' from Greg Huddle
    $('.square').click(function (e) {

        let t = e.target.id;
        //alert('testtest'); //this is running
        //alert(t); //wow, t is running too
        playAnimation(t);
        pArray.push(t); //add id of box to array
        pAl++; //increment length for comparison, by one
        //alert(pArray);
        //alert(pArray.length);
        //alert(testLength);

        if (pAl === testLength) {
            if (JSON.stringify(pArray) === JSON.stringify(gArray)) {
                alert('success');
            } else {
                alert('failure');
            }
        }
    });


}

function compareArrays(pArray, gameArray) {

    //https://www.w3docs.com/snippets/javascript/how-to-compare-two-javascrpt-arrays.html
    let isEqual = JSON.stringify(pArray) === JSON.stringify(gameArray); //not sure the stringify is necessary for the data from localstorage
    if (isEqual === true) {
        return 'success';
    } else {
        return 'failure';
    }
}
/*
https://stackoverflow.com/questions/13667533/getelementsbyclassname-onclick-issue
*/

function playAnimation(squ) {
    //look up animation css in dictionary
    //first get onclick in playerArray to work
    alert('animation');


    // https://www.techiedelight.com/add-css-property-javascript/
    $(document).ready(function () {
        $("#" + squ).css("background-color", "lightgray");
        
    });
   
    let a = dictAnimate.sq1.alert;
    
    alert(a);

}