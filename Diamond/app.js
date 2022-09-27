const inputNum = document.getElementById("number-box");
const result = document.getElementById("result");
inputNum.addEventListener("input", () => {
  result.innerHTML = diamond(inputNum.value);
});

let diamond = (number) => {
  const num = number;
  let result = "";
  let num2 = num;

  let space = -2;
  for (let i = 1; i < num * 2; i++) {
    if (i < num) {
      for (let j = num2; 0 < j; j--) {
        result += " ";
      }
      result += "*";
      num2--;

      for (let a = space; 0 <= a; a--) {
        result += " ";
      }
      if (space != -2) {
        result += "*" + "\n";
      } else {
        result += "\n";
      }
      space += 2;
    } else {
      for (let k = num2; k > 0; k--) {
        result += " ";
      }
      result += "*";
      num2++;
      for (let a = space; 0 <= a; a--) {
        result += " ";
      }

      if (space == -2) {
        break;
      } else {
        space -= 2;
        result += "*" + "\n";
      }
    }
  }

  return `${result}`;
};
