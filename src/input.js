export function generateInput(callback) {
  document.getElementById("user-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const userInput = document.getElementById("user-input");
    const inputValue = parseInt(userInput.value, 10);

    if (isNaN(inputValue) || inputValue < 100 || inputValue > 999) {
      throw new Error("잘못된 입력입니다. 1부터 9까지의 서로 다른 숫자 3개를 입력해주세요.");
    } else {
      console.log("잘 입력햇어요");
      callback(inputValue);
    }
  });
}
