function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
console.log(rps(rps(rps("rock", "paper"), "rock"), "rock"));
console.log(rps(rps("paper", "rock"), "rock"));
console.log(rps("paper", "rock"));
console.log("paper");
