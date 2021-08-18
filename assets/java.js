function generateArray() {

    //generates an array of length set by user input on index page and fills it with random numbers from 1 to 4
    //generate an empty player array with the same length
    let startlev = document.getElementById('g-level').value;
//we will need some logic to get a new startlev in 
    let playerArray = new Array();
    playerArray.length = startlev;
    //https://www.ma-no.org/en/programming/javascript/how-to-populate-an-array-with-random-numbers-in-javascript
    let gameArray = Array.from({
        length: startlev
        //https://www.educba.com/random-number-generator-in-javascript/

    }, () => Math.floor(Math.random() * (4)) + 1);
    //gameArray.forEach(function (item, index, arr) {
    //  console.log(item);
    //}
    //)
    ;
    return [gameArray, playerArray];
}



function playArray(gameArray) {
    //https://www.telerik.com/blogs/how-do-i-pause-execution-in-javascript
    alert(gameArray);
    gameArray.forEach(element =>{
        switch (element) {
        case '1': 
            function chgGr(){
                document.getElementById("squ1").style="background-color:lawngreen";
            }
            function chgGrB(){
                document.getElementById("squ1").style="background-color:green";
            }
           chgGr();
           setTimeout(chgGrB(), 5000);
            
        case '2': 
            function chgYe(){
                document.getElementById("squ2").style="background-color:lightsalmon";
            }
            function chgYeB(){
                document.getElementById("squ2").style="background-color:yellow";
            }
           chgYe();
           setTimeout(chgYeB(), 5000);
        case '3': 
            function chgRe() {
                document.getElementById("squ3").style="background-color:bisque";}
            function chgReB() {
                document.getElementById("squ3").style="background-color:red";
            }
           chgRe();
           setTimeout(chgReB(), 5000);
        case '4': 
            function chBl(){
                document.getElementById("squ4").style="background-color:cornflowerblue";}
            function chgBlB (){
                document.getElementById("squ4").style="background-color:blue";
            }
            chgBl();
           setTimeout(chgBlB(), 5000);
        default: 
            alert("no game data!!");
        }
    })
        

       //alert('test1');
        

}
