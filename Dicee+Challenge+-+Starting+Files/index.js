
function playingdice(){

let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

document.querySelector(".img1").src = `./images/dice${randomNumber1}.png`;
document.querySelector(".img2").src = `./images/dice${randomNumber2}.png`;

let title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    title.textContent = "🚀 Player One Wins!";
} else if (randomNumber1 < randomNumber2) {
    title.textContent = "🎉 Player Two Wins!";
} else {
    title.textContent = "🤝 Draw!";
}
}

playingdice();