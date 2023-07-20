// My Solution
// function calculator(x, y, operator) {
//   if (
//     !(
//       operator === "+" ||
//       operator === "-" ||
//       operator === "*" ||
//       operator === "/"
//     )
//   ) {
//     console.log("Error: Please enter '+, -, * or /' operators");
//   } else {
//     switch (operator) {
//       case "+":
//         console.log(x + y);
//         break;
//       case "/":
//         console.log(x / y);
//         break;
//       case "-":
//         console.log(x - y);
//         break;
//       case "*":
//         console.log(x * y);
//         break;
//       default:
//         console.log("how you reached here!?");
//     }
//   }
// }

function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    default:
      result = "Invalid Operator";
  }
  console.log(result);
  return result;
}

calculator(5, 2, "&");
