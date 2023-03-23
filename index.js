var ruleScreen = document.querySelector(".rules");

//Displaying Rules.
const OpenRules = () => {
  ruleScreen.classList.remove("fadeOut");
  ruleScreen.classList.add("fadeIn");
  return;
};

//Hiding Rules.
const CloseRules = () => {
  ruleScreen.classList.remove("fadeIn");
  ruleScreen.classList.add("fadeOut");
  return;
};

var Y_Score = localStorage.setItem("Y_Score",document.getElementById("Yscore").textContent);
var C_Score = localStorage.setItem("C_Score",document.getElementById("Cscore").textContent);

var yscore = parseInt(localStorage.getItem("Y_Score"));
var cscore = parseInt(localStorage.getItem("C_Score"));

const playMatch = () => {
  let options = document.querySelectorAll(".options button");
  let playerHand = document.querySelector(".player_hand");
  let compHand = document.querySelector(".comp_hand");

  //computer Options
  let computerOptions = ["Rock", "Paper", "Scissor"];

  options.forEach((option) => {
    option.addEventListener("click", function () {
      const computerNumber = Math.floor(Math.random() * 3);
      const computerChoise = computerOptions[computerNumber];

      console.log(this.textContent);
      console.log(computerChoise);
      compareHands(this.textContent, computerChoise);

      //update Images
      playerHand.src = `./signs/${this.textContent}.png`;
      compHand.src = `./signs/${computerChoise}.png`;
    });
  });
};

const compareHands = (playerChoice, computerChoise) => {
    const winner = document.querySelector(".wn");
    const winner1 = document.querySelector(".apc");
    const Rematch = document.querySelector(".play_again");
    var btn1 = document.querySelector(".rls");
    var btn2 = document.querySelector(".btn2");
    var elps1 = document.querySelector(".elipson1");
    var elps2 = document.querySelector(".elipson2");

    //checking for tie
    if (playerChoice === computerChoise) {
      winner.textContent = "TIE UP";
      winner1.textContent = "";
      Rematch.textContent = "REPLAY";
      btn1.classList.remove("fadeOut");
      btn1.classList.add("fadeIn");
      btn2.classList.remove("fadeIn");
      btn2.classList.add("fadeOut");
      elps1.classList.remove("fadeIn");
      elps1.classList.add("fadeOut");
      elps2.classList.remove("fadeIn");
      elps2.classList.add("fadeOut");
      return;
    }

    //checking for rock
    if (playerChoice === "Rock") {
      if (computerChoise === "Scissor") {
        winner.textContent = "YOU WIN";
        winner1.textContent = "AGAINST PC";
        Rematch.textContent = "PLAY AGAIN";
        yscore++;
        btn1.classList.remove("fadeIn");
        btn1.classList.add("fadeOut");
        btn2.classList.remove("fadeOut");
        btn2.classList.add("fadeIn");
        elps1.classList.remove("fadeOut");
        elps1.classList.add("fadeIn");
        elps2.classList.remove("fadeIn");
        elps2.classList.add("fadeOut");
        document.getElementById("Yscore").innerText = yscore;
        localStorage.setItem("Y_Score", yscore);
        return;
      } else {
        winner.textContent = "YOU LOST";
        winner1.textContent = "AGAINST PC";
        Rematch.textContent = "PLAY AGAIN";
        cscore++;
        btn1.classList.remove("fadeOut");
        btn1.classList.add("fadeIn");
        btn2.classList.remove("fadeIn");
        btn2.classList.add("fadeOut");
        elps2.classList.remove("fadeOut");
        elps2.classList.add("fadeIn");
        elps1.classList.remove("fadeIn");
        elps1.classList.add("fadeOut");
        document.getElementById("Cscore").innerText = cscore;
        localStorage.setItem("C_Score", cscore);
        return;
      }
    }

    //checking for paper
    if (playerChoice === "Paper") {
      if (computerChoise === "Scissor") {
        winner.textContent = "YOU LOST";
        winner1.textContent = "AGAINST PC";
        Rematch.textContent = "PLAY AGAIN";
        cscore++;
        btn1.classList.remove("fadeOut");
        btn1.classList.add("fadeIn");
        btn2.classList.remove("fadeIn");
        btn2.classList.add("fadeOut");
        elps2.classList.remove("fadeOut");
        elps2.classList.add("fadeIn");
        elps1.classList.remove("fadeIn");
        elps1.classList.add("fadeOut");
        document.getElementById("Cscore").innerText = cscore;
        localStorage.setItem("C_Score", cscore);
        return;
      } else {
        winner.textContent = "YOU WIN";
        winner1.textContent = "AGAINST PC";
        Rematch.textContent = "PLAY AGAIN";
        yscore++;
        btn1.classList.remove("fadeIn");
        btn1.classList.add("fadeOut");
        btn2.classList.remove("fadeOut");
        btn2.classList.add("fadeIn");
        elps1.classList.remove("fadeOut");
        elps1.classList.add("fadeIn");
        elps2.classList.remove("fadeIn");
        elps2.classList.add("fadeOut");
        document.getElementById("Yscore").innerText = yscore;
        localStorage.setItem("Y_Score", yscore);
        return;
      }
    }

    //checking for scissor
    if (playerChoice === "Scissor") {
      if (computerChoise === "Paper") {
        winner.textContent = "YOU WIN";
        winner1.textContent = "AGAINST PC";
        Rematch.textContent = "PLAY AGAIN";
        yscore++;
        btn1.classList.remove("fadeIn");
        btn1.classList.add("fadeOut");
        btn2.classList.remove("fadeOut");
        btn2.classList.add("fadeIn");
        elps1.classList.remove("fadeOut");
        elps1.classList.add("fadeIn");
        elps2.classList.remove("fadeIn");
        elps2.classList.add("fadeOut");
        document.getElementById("Yscore").innerText = yscore;
        localStorage.setItem("Y_Score", yscore);
        return;
      } else {
        winner.textContent = "YOU LOST";
        winner1.textContent = "AGAINST PC";
        Rematch.textContent = "PLAY AGAIN";
        cscore++;
        btn1.classList.remove("fadeOut");
        btn1.classList.add("fadeIn");
        btn2.classList.remove("fadeIn");
        btn2.classList.add("fadeOut");
        elps2.classList.remove("fadeOut");
        elps2.classList.add("fadeIn");
        elps1.classList.remove("fadeIn");
        elps1.classList.add("fadeOut");
        document.getElementById("Cscore").innerText = cscore;
        localStorage.setItem("C_Score", cscore);
        return;
      }
    }
};

var Result = document.querySelector(".match");
var Optns = document.querySelector(".options");
var btn1 = document.querySelector(".rls");
var btn2 = document.querySelector(".btn2");

//For Displaying HomeScreen.
const Homepage = () => {
  Optns.classList.remove("fadeOut");
  Optns.classList.add("fadeIn");
  Result.classList.add("fadeOut");
  Result.classList.remove("fadeIn");
  btn1.classList.remove("fadeOut");
  btn1.classList.add("fadeIn");
  btn2.classList.remove("fadeIn");
  btn2.classList.add("fadeOut");
  return;
};

//For Vanishing HomeScreen and displaying the result.
const Vanish = () => {
  Optns.classList.remove("fadeIn");
  Optns.classList.add("fadeOut");
  Result.classList.remove("fadeOut");
  Result.classList.add("fadeIn");
  return;
};

playMatch();
