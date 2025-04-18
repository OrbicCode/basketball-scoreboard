const btn1h = document.getElementById('btn-1h');
const btn2h = document.getElementById('btn-2h');
const btn3h = document.getElementById('btn-3h');
const btn1g = document.getElementById('btn-1g');
const btn2g = document.getElementById('btn-2g');
const btn3g = document.getElementById('btn-3g');

const homeScoreP = document.getElementById('home-score');
const guestScoreP = document.getElementById('guest-score');

const reset = document.getElementById('reset')

let homeScore = 0
let guestScore = 0

function increaseHBy1() {
    homeScore ++
    homeScoreP.textContent = homeScore
    updateColor()
}

function increaseHBy2() {
    homeScore += 2
    homeScoreP.textContent = homeScore
    updateColor()
}

function increaseHBy3() {
    homeScore += 3
    homeScoreP.textContent = homeScore
    updateColor()
}

function increaseGBy1() {
    guestScore ++
    guestScoreP.textContent = guestScore
    updateColor()
}

function increaseGBy2() {
    guestScore += 2
    guestScoreP.textContent = guestScore
    updateColor()
}

function increaseGBy3() {
    guestScore += 3
    guestScoreP.textContent = guestScore
    updateColor()
}

function newGame() {
    guestScore = 0
    homeScore = 0
    guestScoreP.textContent = guestScore
    homeScoreP.textContent = homeScore
    updateColor()
}

function updateColor() {
    
    if (homeScore > guestScore) {
        homeScoreP.style.color = "#10B981"
        guestScoreP.style.color = "#F94F6D"
    } else if (guestScore > homeScore) {
        guestScoreP.style.color = "#10B981"
        homeScoreP.style.color = "#F94F6D"
    } else if (homeScore === 0 && guestScore === 0) {
        guestScoreP.style.color = "#F94F6D"
        homeScoreP.style.color = "#F94F6D"
    } else {
        guestScoreP.style.color = "#FBBF24"
        homeScoreP.style.color = "#FBBF24"
    }
}   

