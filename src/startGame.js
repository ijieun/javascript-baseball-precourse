import { generateNum } from "./generate.js";
import { generateInput } from "./input.js";
import { generateResult } from "./result.js";

function restartGame() {
  const restart = prompt("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
  if (restart === "1") {
    startGame();
  } else {
    console.log("게임을 종료합니다.");
  }
}

const gameOver = false;

function startGame() {
  if (gameOver) {
    return;
  }
  console.log("숫자 야구 게임을 시작합니다.");

  const computerInputNumbers = generateNum();

  function handleInput(userInputNumbers) {
    console.log("유저 인풋 : " + userInputNumbers);

    const result = generateResult(computerInputNumbers, userInputNumbers);

    if (result === "win") {
      console.log("게임종료");
      restartGame();
      gameOver = true; // 게임이 종료되었음을 표시
    } else {
      console.log(result);
      generateInput(handleInput);
    }
  }
  generateInput(handleInput);
}

startGame();
