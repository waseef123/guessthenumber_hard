var y = Math.floor(Math.random() * 50 + 1)
playername = localStorage.getItem("playername")
var guess = 1;

function submit() {
    var x = document.getElementById("guessField").value
    if (x == y) {
        alert("Congratulation " + playername + " you guessed it right in " + guess + " guess")
        guess = 1;
    }
    else if (x > y) {
        guess++;
        alert("Oops sorry try a smaller number")

    }
    else { guess++;
    alert("Oops Try a Greater Number") 

}

}
function play_again(){
    y=Math.floor(Math.random() * 50 + 1) ;
    document.getElementById("guessField").value=""
}

