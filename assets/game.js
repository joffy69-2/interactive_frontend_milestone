const gArray = JSON.parse(localStorage.getItem("gameJSON"));

document.getElementById("play").onclick = function () {
    
    //const gArray = JSON.parse(localStorage.getItem("gameJSON"));
    alert(gArray[0]);
    const test = gArray[0];
    playArray(test);
    return {};
}
/*
https://stackoverflow.com/questions/13667533/getelementsbyclassname-onclick-issue
*/

var squ = document.getElementsByClassName("square");
var pArray = gArray[1];

//alert(dictSquares[1]);
   /* for (var i = 0; i < pArray.length; i++) {
        squ[i].onclick = function () {
            pArray.length
            alert(dictSquares[i]);
            document.getElementById(dictSquares[i]) dictSquares[1] returns sq1 we don't want i we want playerArray.length
            //fillPlayerarray();
            cant use i as it is only 4 long*/
        
//I am trying to iterate through pArray, for each index (null to start with) take user input (ie sq1, 2 3 4 from dictSquares) until array is full/no null values

       // }

    //}

for (var i = 0; i < pArray.length; i++){
    //this could probably be pArray.forEach
    for (var j =0; j < squ.length; j++){
        squ[j].onclick = function (){
            //here is where we add chosen squ to pArray
        }
    }
}