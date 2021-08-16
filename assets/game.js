document.getElementById("play").onclick = function () {
    
    let gArray = JSON.parse(localStorage.getItem("gameJSON"));
    alert("test");
    console.log(gArray[0]);
    
    playArray();
};