function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 === 0 ? "Error" : num1 / num2;
    default:
      return "Invalid operator";
  }
}
console.log(calculator(2, 3, "+")); // 5
console.log(calculator(6, 2, "/")); // 3
