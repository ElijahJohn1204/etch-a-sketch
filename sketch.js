let size = 16;

container = document.querySelector(".container");

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const g= Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const div = document.createElement("div");
            div.classList.add("grid");
            container.appendChild(div);
            div.style.flex = "0 0 calc(100% / " + n;
        }
    }

    boxes = document.querySelectorAll(".grid");
    boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = getRandomRgbColor();
            box.style.opacity = (box.style.opacity) ? (parseFloat(box.style.opacity) + .1).toString() : "0";
        });
    });
}

createGrid(size);


eraseBtn = document.querySelector(".erase");
eraseBtn.addEventListener("click", () => {
    container.textContent = '';
    createGrid(size);
});

resizeBtn = document.querySelector(".resize");
resizeBtn.addEventListener("click", () => {
    const rows = parseInt(prompt("Please enter the number of squares you want (less than 100 please): "));
    if (!rows || rows > 100) {
        alert("invalid input");
    }
    container.textContent = '';
    size = rows;
    createGrid(rows);
})