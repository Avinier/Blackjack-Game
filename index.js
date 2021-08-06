let player = {
    name: "Avinier",
    chips: 150
}

let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""



let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")
// let startEl = document.getElementById("start-el")

console.log(playerEl)
playerEl.textContent = player.name + ": $" + player.chips


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]

    renderGame()
}

function getRandomCard() {
    
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10;
    }

    return randomCard
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card ma boi? 😎"
        isAlive = true
    } 
    else if (sum === 21) {
        message = "Daamn, you got the blackjack! 🤑"
        hasBlackJack = true
    } 
    else {
        message = "Unfortunately, u lost, ligma balls. 😱"
        isAlive = false
        // startEl.textContent = "NEW GAME"
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}