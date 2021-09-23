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

    gameArray.forEach((item, index) => {
        setTimeout(playanimate, 1000(index+1), item);
    });
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
      //https://www.freecodecamp.org/news/javascript-settimeout-how-to-set-a-timer-in-javascript-or-sleep-for-n-seconds/
    /*  If you omit the second parameter, then setTimeout() will immediately execute the passed function without waiting at all.

Finally, you can also pass additional parameters to the setTimeout() method that you can use inside the function as follows:

function greeting(name, role){
  console.log(`Hello, my name is ${name}`);
  console.log(`I'm a ${role}`);
}

setTimeout(greeting, 3000, "Nathan", "Software developer");
setTimeout() with additional parameters for the function
Now you may be thinking, "why not just pass the parameters directly to the function?"

This is because if you pass the parameters directly like this:

setTimeout(greeting("Nathan", "Software developer"), 3000);
Then JavaScript will immediately execute the function without waiting, because you're passing a function call and not a function reference as the first parameter.THIS NB NB

This is why if you need to pass any parameters to the function, you need to pass them from the setTimeout() method.

But honestly, I never found the need to pass additional parameters to the setTimeout() method in my role as a Software Developer, so don't worry about it 😉

How to Cancel the setTimeout Method
You can also prevent the setTimeout() method from executing the function by using the clearTimeout() method.

The clearTimeout() method requires the id returned by setTimeout() to know which setTimeout() method to cancel:

clearTimeout(id);
clearTimeout() syntax
Here's an example of the clearTimeout() method in action:

const timeoutId = setTimeout(function(){
    console.log("Hello World");
}, 2000);

clearTimeout(timeoutId);
console.log(`Timeout ID ${timeoutId} has been cleared`);
clearTimeout() method in action
If you have multiple setTimeout() methods, then you need to save the IDs returned by each method call and then call clearTimeout() method as many times as needed to clear them all.

Conclusion*/
       //need to write a function that "plays" an animation using settime=  1000 then 2000 etc for n times, getting the id of the square to change from memory
    //so, the function will construct javascript for n times, getting individual code from dictionary.
    //for (n){
    //    setTimeout(function showButtonchoice(n), 1000*n);
   // }

    //function write_the_javascript (n"the level") {
    // for (run thru n){
    //      animation_for_box_from_game_data_dictionary.settime(1000*n).append_to_javascript_file?
    //      use it to write inline css
    //      }   
    //} 
    // maybe this https://stackoverflow.com/questions/62032800/executing-keyframes-animation-in-js-or-jquery nested setTimeOuts or this https://animate.style/

    //while 

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

