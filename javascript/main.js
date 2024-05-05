const adviceId = document.getElementById("advice-id");
const advice = document.getElementById("advice");
const btn = document.getElementById("btn");
const icon = document.getElementById("icon");

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceId.innerHTML = `ADVICE # ${data.slip.id}`;
      advice.innerHTML = `"${data.slip.advice}"`;
    });

  if (icon.classList.contains("rotate")) {
    icon.classList.remove("rotate");
  } else {
    icon.classList.add("rotate");
  }
});
