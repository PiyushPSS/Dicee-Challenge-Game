var diceRandom1 = Math.floor(Math.random() * 6) + 1;

var diceRandom2 = Math.floor(Math.random() * 6) + 1;

document.getElementsByClassName('img1')[0].setAttribute("src", `images/dice${diceRandom1}.png`);
document.getElementsByClassName('img2')[0].setAttribute("src", `images/dice${diceRandom2}.png`);


if(diceRandom1 > diceRandom2) {
    document.querySelector('h1').innerText = "Player 1 Wins! 🚩"
} else if (diceRandom2 > diceRandom1) {
    
    document.querySelector('h1').innerText = "Player 2 Wins! 🚩"
} else {
    document.querySelector('h1').innerText = "Draw 😁"

}