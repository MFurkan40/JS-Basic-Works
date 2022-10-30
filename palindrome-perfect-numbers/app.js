const perfect = (num) => {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    num % i === 0 && (sum += i);
  }

  if (sum === 0 && num === 0) {
    return false;
  }

  return sum == num;
};

const palindromeAndPerfect = (min, max) => {
  const palindromeList = [];
  const perfectList = [];
  for (let i = min; i <= max; i++) {
    if (String(i) == String(i).split("").reverse().join("")) {
      palindromeList.push(i);
    }

    perfect(i) && perfectList.push(i);
  }

  return [palindromeList, perfectList];
};

document.querySelector("#palindrome-btn").addEventListener("click", () => {
  const palindrome = document.querySelector("#palindrome");
  const perfect = document.querySelector("#perfect");
  const min = Number(document.querySelector("#min").value);
  const max = Number(document.querySelector("#max").value);
  if (max < min || max == min || min < 0) {
    alert("Please enter a valid number!");
    palindrome.innerHTML = "";
    perfect.innerHTML = "";
    return;
  }
  palindrome.innerHTML = "";

  const result = palindromeAndPerfect(min, max);

  result[0].map((i) => {
    palindrome.innerHTML += `${i}\n`;
  });
});

document.querySelector("#perfect-btn").addEventListener("click", () => {
  const palindrome = document.querySelector("#palindrome");
  const perfect = document.querySelector("#perfect");
  const min = Number(document.querySelector("#min").value);
  const max = Number(document.querySelector("#max").value);
  if (max < min || max == min || min < 0) {
    alert("Please enter a valid number!");
    palindrome.innerHTML = "";
    perfect.innerHTML = "";
    return;
  }

  perfect.innerHTML = "";

  const result = palindromeAndPerfect(min, max);

  result[1].map((i) => {
    perfect.innerHTML += `${i}\n`;
  });
});

document.querySelector("#copy-palindrome").addEventListener("click", () => {
  navigator.clipboard.writeText(palindrome.innerHTML);
  console.log(palindrome.innerHTML);
});

document.querySelector("#copy-perfect").addEventListener("click", () => {
  const perfect = document.querySelector("#perfect");
  navigator.clipboard.writeText(perfect.innerHTML);
  console.log(perfect.innerHTML);
});
