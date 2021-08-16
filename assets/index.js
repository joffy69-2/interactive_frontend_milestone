document.getElementById("start").onclick = function () {
    
    let arrays = generate_array();
    const arrayJSON = JSON.stringify(arrays);
    localStorage.setItem("gameJSON", arrayJSON);
};