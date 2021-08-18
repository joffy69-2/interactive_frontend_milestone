document.getElementById("start").onclick = function () {
    
    let arrays = generateArray();
    const arrayJSON = JSON.stringify(arrays);
    localStorage.setItem("gameJSON", arrayJSON);

}