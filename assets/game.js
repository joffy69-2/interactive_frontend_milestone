document.getElementById("play").onclick = function () {
    
    const gArray = JSON.parse(localStorage.getItem("gameJSON"));
    alert(gArray[0]);
    const test = gArray[0];
    playArray(test);

};