const box = document.querySelector(".box");

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  box.appendChild(square);
  square.classList.add("square");
}
