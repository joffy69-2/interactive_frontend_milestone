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

const squ = document.getElementsByClassName("square");
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

pArray.forEach(element => {
    //this could probably be pArray.forEach
    for (var j = 0; j < squ.length; j++) {
        squ[j].onclick = function () {
            let plId = document.getElementById(j);
            //here is where we add chosen squ to pArray
            //now that the localstorage has sq1 etc i can just use the ids of the divs
          // https://www.geeksforgeeks.org/how-to-get-the-id-of-the-clicked-button-using-javascript-jquery/ NB THIS SHOULD DO
          $('.square').click(function(){
              var t =$(this).attr('id');
              //t should now hold the id of the clicked div
              //pArray[j] = t; //this line doesn't work I haven't tried to update local storage yet
              alert('testtest');//this is running
              alert(t); //wow, t is running too
              //create an  empty array
              arrayTest=[];
              //append t to arrayTest until arrayTest.length===pArray.length
              do{
                arrayTest.push(t);
              }
              while (arrayTest.length<pArray.length);
              alert (arrayTest.length);
              //this is so close - what is happening is that t is going in 5 times and filling the array it needs to be in a loop
            
          })
        }
    }
});