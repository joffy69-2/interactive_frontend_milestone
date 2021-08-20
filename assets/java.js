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
    gameArray.forEach(element => {
        switch (element) {

            //https://blog.devgenius.io/how-to-make-javascript-sleep-or-wait-d95d33c99909
            //https://code-boxx.com/pause-javascript/
            case 1:
                function chgGr() {
                    document.getElementById("sq1").style = "background-color:lawngreen";
                };

                function chgGrB() {
                    document.getElementById("sq1").style = "background-color:green";
                };

                function test() {
                    document.getElementById('sq1').innerHTML = '<h3>square 1</h3>';
                }
                //
                //Maybe I can use transitions to produce a reasonable time for the game
                //how about eventhandler on end of transition
                /*async function cG() {
                    chgGr();
                    await new Promise(res => {
                        setTimeout(res, 5000);
                    });
                    chgGrB();
                }
                cG();*/
                function delay(ms) {
                    return new Promise(resolve => setTimeout(resolve, ms));
                }
                chgGr();
                delay(3000).then(() => chgGrB);
                break;

            case 2:
                function chgYe() {
                    document.getElementById("sq2").style = "background-color:lightsalmon";
                };

                function chgYeB() {
                    document.getElementById("sq2").style = "background-color:yellow";
                };
                async function cY() {
                    chgYe();
                    await new Promise(res => {
                        setTimeout(res, 5000);
                    });
                    chgYeB();
                }
                cY();
                break;
            case 3:
                function chgRe() {
                    document.getElementById("sq3").style = "background-color:bisque";
                };

                function chgReB() {
                    document.getElementById("sq3").style = "background-color:red";
                };
                async function cR() {
                    chgRe();
                    await new Promise(res => {
                        setTimeout(res, 5000);
                    });
                    chgReB();
                }
                cR();
                break;
            case 4:
                function chgBl() {
                    document.getElementById("sq4").style = "background-color:cornflowerblue";
                };

                function chgBlB() {
                    document.getElementById("sq4").style = "background-color:blue";
                };
                async function cB() {
                    chgBl();
                    await new Promise(res => {
                        setTimeout(res, 5000);
                    });
                    chgBlB();
                }
                cB();
                break;
            default:
                alert("no game data!!");
        }
    })



}

function playerArray() {
    var pArray = [];
    var pAl = pArray.length;
    var testLength = JSON.parse(localStorage.getItem("gameJSON"))[0].length;
    //https://code-institute-room.slack.com/team/U01N3V9MFAP

    $('.square').click(function (e) {
        
            let t = e.target.id;
            alert('testtest'); //this is running
            alert(t); //wow, t is running too

            pArray.push(t);
            pAl++;
            alert(pArray);
            alert(pArray.length);
            alert(testLength);

            if (pAl===testLength){
                return pArray;
            }
    });


    
    //we have to stop when pArray.length === gameArray.length
}

function compareArrays(pArray, gameArray) {
    //when pArray.length==gArray.length
    //now need a test for length of arrays and contents of arrays
    //https://www.w3docs.com/snippets/javascript/how-to-compare-two-javascrpt-arrays.html
    /*let firstArr = [1, 2, [3, 4, 5]];
    let secondArr = [1, 2, [3, 4, 5]];
    let isEqual = JSON.stringify(firstArr) === JSON.stringify(secondArr);
    console.log(isEqual);*/
    let isEqual = JSON.stringify(pArray) === JSON.stringify(gameArray);
    if (isEqual === true) {
        return 'success';
    } else {
        return 'failure';
    }
}