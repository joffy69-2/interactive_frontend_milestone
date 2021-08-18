document.getElementById("play").onclick = function () {
    
    const gArray = JSON.parse(localStorage.getItem("gameJSON"));
    //let test =localStorage.getItem("testJSON");
    test = Array.isArray(Array.from(gArray));
    alert(test);
    
    
    
    //playArray(gArray);
};