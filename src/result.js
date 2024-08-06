export function generateResult(computerInputNumbers, userInputNumbers) {
  let strikes = 0;
  let balls = 0;

  computerInputNumbers = computerInputNumbers.toString().split("").map(Number);
  userInputNumbers = userInputNumbers.toString().split("").map(Number);

  // 반복해서 숫자 비교
  for (let i = 0; i < 3; i++) {
    if (computerInputNumbers[i] === userInputNumbers[i]) {
      strikes++;
    } else if (computerInputNumbers.includes(userInputNumbers[i])) {
      balls++;
    }
  }

  if (strikes === 3) {
    document.getElementById("result").textContent = "3 스트라이크";
    return "win";
  }

  if (strikes > 0 || balls > 0) {
    document.getElementById("result").textContent = `${balls}볼 ${strikes}스트라이크`;
    return "continue";
  }
  if (strikes === 0 && balls === 0) {
    document.getElementById("result").textContent = "낫싱";
    return "continue";
  }
}
