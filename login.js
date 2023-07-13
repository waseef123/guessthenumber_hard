// Create the login function here.
function Login() {
playername = document.getElementById("playername").value
localStorage.setItem("playername",playername) ;
window.location="gamepage.html" ;
 
}