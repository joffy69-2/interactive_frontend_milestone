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

pArray = playerArray(); //this doesn't get defined because it is set at page load, when we haven't used playerArray
alert('it gets to here pArray');
/*if (pArray.length === gArray[0].length) {
    result = compareArrays(gArray[0], pArray);
}
if(result === success){
    alert('success');
} else {
    alert('failure');
}*/

compareArrays(pArray, gArray[0]);