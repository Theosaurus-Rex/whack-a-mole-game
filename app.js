const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    // Remove classes before starting new game 
    square.forEach(className => {
        className.classList.remove('mole')
    })
    // Round down so random position is always <= 9
    let randomPosition = square[Math.floor(Math.random() * 9)]
    // Put mole in the randomly selected position
    randomPosition.classList.add('mole')

    //assign the id of the randomPosition to hitPosition 
    hitPosition = randomPosition.id
}

square.forEach(id => {
    // if the clicked square id matches the id of the mole square, score increases
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
            hitPosition = null
        }
    })
})

// move the mole every so often 
function moveMole() {
    let timerId = null
    // run the randomSquare function every 700ms
    timerId = setInterval(randomSquare, 700)
}

moveMole()

// decrement time left by 1
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    // if the current time is zero, game over 
    if(currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
} 

// evoke every 1 second
let timerId = setInterval(countDown, 1000)