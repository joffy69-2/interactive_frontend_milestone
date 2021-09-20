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
    

    return [gameArray, playerArray]; //needed to ensure the data goes into localstorage

}



function playArray(gameArray) {
    //https://www.telerik.com/blogs/how-do-i-pause-execution-in-javascript

    function readDict(book) {
        
    }
    gameArray.forEach(readDict);
    //now to put the alert in the dictionary
    $(document).ready(function() {
        $('#play').click(function() {
          var box = $('.square')
          box.removeClass("show")
          setTimeout(function(){
              box.addClass("trans").addClass("show")
              setTimeout(function(){
                  box.removeClass("trans")
              },100)
          },200)
        });
      });
       //need to write a function that "plays" an animation using settime=  1000 then 2000 etc for n times, getting the id of the square to change from memory
    //so, the function will construct javascript for n times, getting individual code from dictionary.

    //function write_the_javascript (n"the level") {
    // for (run thru n){
    //      animation_for_box_from_game_data_dictionary.settime(1000*n).append_to_javascript_file?
    //      use it to write inline css
    //      }   
    //} 
    // maybe this https://stackoverflow.com/questions/62032800/executing-keyframes-animation-in-js-or-jquery nested setTimeOuts or this https://animate.style/

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
        showButtonchoice(t);
        pArray.push(t); //add id of box to array
        pAl++; //increment length for comparison, by one

        if (pAl === testLength) {
            if (JSON.stringify(pArray) === JSON.stringify(gArray)) {
                alert('success');
                //add one to level now
                //add one to score now
            } else {
                alert('failure');
                //try again?
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

function showButtonchoice(squ) {
    //look up animation css in dictionary
    //first get onclick in playerArray to work
    


    // https://www.techiedelight.com/add-css-property-javascript/
    let c = dictAnimate.sq1.css;
    alert(c);
    $(document).ready(function () {
        
        $('#' + squ).css(c, dictAnimate.sq1.css2);
        alert($('#' + squ).css(c));
        alert(squ);
        alert(c);
        
        
    });
    
   
    //let a = dictAnimate.sq1.alert;
    
    //alert(a);

   
}

