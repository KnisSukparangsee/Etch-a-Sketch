const box = document.querySelector(".box");
const btn = document.querySelector("button");

btn.addEventListener("click", (event) => {
  let user;
  let n;

  do {
    user = prompt("Number of squares per side: ");
    n = parseInt(user);
  } while ((!Number.isInteger(n) && !isNaN(n)) || n <= 0 || n > 100);

  if (!isNaN(n)) {
    createGrid(n);
  }
});

for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");

  box.appendChild(square);

  square.classList.add("square");
  square.style.width = `${100 / 16}%`;

  const red = (Math.random() * 256);
  const green = (Math.random() * 256);
  const blue = (Math.random() * 256);

  let opacity = 0;

  square.addEventListener("mouseenter", (event) => {      
    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    opacity = opacity === 1 ? 1 : opacity + 0.1;
    square.style.opacity = opacity;
  })
};

function createGrid(n) {
  const squares = document.querySelectorAll(".square");

  squares.forEach(square => {
    box.removeChild(square);
  });

  for (let i = 0; i < n * n; i++) {
    const square = document.createElement("div");
    box.appendChild(square);
    square.classList.add("square");
    square.style.width = `${100 / n}%`;

    const red = (Math.random() * 256);
    const green = (Math.random() * 256);
    const blue = (Math.random() * 256);

    let opacity = 0;

    square.addEventListener("mouseenter", (event) => {      
      square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      
      opacity = opacity === 1 ? 1 : opacity + 0.1;
      square.style.opacity = opacity;
    });
  }
};