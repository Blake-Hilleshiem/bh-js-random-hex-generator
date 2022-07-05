const hexColor = document.getElementById("color-hex");
const changeBtn = document.getElementById("click-me");
const pageFeatures = document.getElementById("background");

function randomHex() {
  const values = "0123456789ABCDEF";
  let hexString = "";
  for (let i = 0; i < 6; i++) {
    hexString += values[Math.floor(Math.random() * values.length)];
  }
  return `#${hexString}`;
}

changeBtn.addEventListener("click", () => {
  let newColor = randomHex();
  hexColor.innerText = newColor;
  pageFeatures.style.backgroundColor = newColor;
});
