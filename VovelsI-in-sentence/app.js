const area = document.getElementById("area");
const button = document.querySelector("button");
const result = document.querySelector(".result");
const style = document.getElementsByClassName("style");
// console.log(area);
// console.log(button);

const vovels = ["a", "e", "ı", "i", "o", "ö", "u", "ü"];

button.addEventListener("click", () => {
  let count = 0;
  if (!area.value) {
    alert("Please enter a sentence or word");
  } else {
    for (let i = 0; i < area.value.length; i++) {
      //   console.log(area.value[i]);
      if (vovels.includes(area.value[i])) {
        count++;
        // console.log(count);
        // console.log(area.value[i]);
      }
    }
  }
  result.style.display = "block";
  result.classList.add("style");
  result.innerText = `There are ${count} vowels in ${area.value}.`;
});
