// Get username from the player
let username = prompt("Hello, please enter a username", "User");
let range = 2 //initial range
let score = 0 //initial score
let level = 1 //initial level
let failCount = [] //to count the number of times wrong guesses were made

// Use the provided username, else use "User" as username
if (username !== null) {
  console.log(` Welcome ${username}`)
} else {
  console.log("Welcome User")
}

let isPlaying = true;

// function that checks the guess
const check = () => {
  while(isPlaying){
    
  let guess = prompt(`Guess a number between 1 and ${range}`)
  let rand = Math.floor(Math.random() * range)
  // if guess was right, increment range, score and level. Reset fail counter
  if (rand == guess) {
    console.log("Correct guess! Level incremeneted")
    range++           //increment the range
    score++           //increment the score
    console.log(`New score = ${score}`)
    level++           //increment the level
    failCount = []    //reset the failure counter
  } else {
    failCount.push(Boolean(false))
    console.log(`Wrong! ${5 - failCount.length} chances left`)
  }
  // if player guesses wrong 5 times, game is over
  if (failCount.length === 5)
    gameOver()
}
}

// If game is over, alert the user of score and level and reset everything to default
const gameOver = () => {
  alert(
    `Game Over! \n
    Weldone ${username}\n
    Final score = ${score} \n
    Final level = ${level}`
  )
  isPlaying = false;
  range = 2
  score = 0
  level = 1
  failCount = []
}

check()