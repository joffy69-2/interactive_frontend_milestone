const gArray = JSON.parse(localStorage.getItem("gameJSON"));

document.getElementById("play").onclick = function () {

    //const gArray = JSON.parse(localStorage.getItem("gameJSON"));
    alert(gArray[0]);
    const test = gArray[0];
    //playArray can play anything
    playArray(test);
    return {};
}
/*
https://stackoverflow.com/questions/13667533/getelementsbyclassname-onclick-issue
*/

pArray = playerArray(); 


compareArrays(pArray, gArray[0]);