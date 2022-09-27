function runJS(){
    const randomNr = Math.floor(Math.random() * 100) + 1;
    document.getElementById("btnGuess").addEventListener("click", () =>{
    const guess = document.getElementById("txtGuess").value;
if (randomNr > guess){
    document.getElementById("response").innerHTML = "You guessed lower.Try again"
} else if(randomNr < guess){
    document.getElementById("response").innerHTML = "You guessed higer"
} else {
    document.getElementById("response").innerHTML = "You guessed correct"
}
    })
}