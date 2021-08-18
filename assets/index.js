document.getElementById("start").onclick = function () {
    
    let gArray =  generateArray();
    
    const gameJSON = JSON.stringify(gArray);
    

    localStorage.setItem("gameJSON", gameJSON);
   

}