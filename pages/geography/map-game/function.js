var Gamemodes = [
    ["Guess the Flag", "Standard Flag Guessing Game", "GF"],
    ["Unveil the Flag", "Slowly unveil a flag every wrong guess", "UF"],
    ["Capital City", "Standard Capital City Guessing Game", "CC"],
]

var GamePath

for (let i = 0; i < Gamemodes.length; i++) {
    let CurrentGamemode = Gamemodes[i]

    let NewElement = document.createElement("div")
    NewElement.classList.add("gamemode")
    NewElement.textContent = CurrentGamemode[0]
    NewElement.id = i

    NewElement.onclick = function() {
        GamemodeClick(Number(this.id))
    }

    document.querySelector(".main-bottom").appendChild(NewElement)
}

function GamemodeClick(num) {
    CurrentGamemode = Gamemodes[num]

    document.querySelector(".title").textContent = CurrentGamemode[0]
    document.querySelector(".subject").textContent = CurrentGamemode[1]
    document.querySelector(".menu-top-right").textContent = localStorage.getItem(CurrentGamemode[2] + "-highscore")

    GamePath = CurrentGamemode[2]
}
GamemodeClick(0)

document.querySelector(".start").onclick = function() {
    window.open(`${GamePath}/index.html`, '_self')
}