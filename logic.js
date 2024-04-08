let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const kunalScorePara = document.querySelector("#kunal-score");

const genkunalChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, kunalChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${kunalChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    kunalScore++;
    kunalScorePara.innerText = kunalScore;
    msg.innerText = `You lost. ${kunalChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const kunalChoice = genkunalChoice();

  if (userChoice === kunalChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = kunalChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = kunalChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = kunalChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, kunalChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});