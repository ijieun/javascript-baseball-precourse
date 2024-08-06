export function generateNum() {
  const digits = [];

  while (digits.length < 3) {
    const randomDigit = Math.floor(Math.random() * 9) + 1;
    if (!digits.includes(randomDigit)) {
      digits.push(randomDigit);
    }
  }
  console.log(digits);
  return parseInt(digits.join(""), 10);
}
