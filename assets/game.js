const gArray = JSON.parse(localStorage.getItem("gameJSON"));

document.getElementById("play").onclick = function () {
    
    //const gArray = JSON.parse(localStorage.getItem("gameJSON"));
    alert(gArray[0]);
    const test = gArray[0];
    playArray(test);
    return {}
}
/*
https://stackoverflow.com/questions/13667533/getelementsbyclassname-onclick-issue
*/

var squ = document.getElementsByClassName("square");
var pArray = gArray[1];
//alert(dictSquares[1]);
    for (var i = 0; i < pArray.length; i++) {
        squ[i].onclick = function () {
            gArray[1].length
            alert(dictSquares[i]);
            /*document.getElementById(dictSquares[i]) dictSquares[1] returns sq1 we don't want i we want playerArray.length
            //fillPlayerarray();
            cant use i as it is only 4 long*/
        
        }

    }

