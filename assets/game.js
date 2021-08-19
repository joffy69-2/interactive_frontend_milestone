document.getElementById("play").onclick = function () {
    
    const gArray = JSON.parse(localStorage.getItem("gameJSON"));
    alert(gArray[0]);
    const test = gArray[0];
    playArray(test);

}
/*
https://stackoverflow.com/questions/13667533/getelementsbyclassname-onclick-issue
*/

var squ = document.getElementsByClassName("square");

    for (var i = 0; i < squ.length; i++) {
        squ[i].onclick = function () {
            //alert(array);
            //we want to 
            let playerChoice;
            if (document.getElementById('sq1')) {
                playerChoice = 1;
                //now put playerChoice in gArray[1]
                //the dictionary idea again
                fillPlayerarray(playerChoice);
            } elseif ()
        }
    };

fillPlayerarray();

