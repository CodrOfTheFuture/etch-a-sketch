//variables
let divs = [];
let container = document.createElement("div");
let btn = document.createElement("button");
let size = 16;
let opacityColor = 1;
let typeofdrawing = "mouseover"
let colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink"];

//styling
container.setAttribute("style", "display: flex; flex-wrap: wrap; width: 256px; border:solid; border-color:black;  ");
btn.setAttribute("style", " height: 30px; width: 100px; ");
btn.textContent = "Change Size";

//background image
document.body.style.backgroundImage = "url('images/forest.jpg')";
document.body.style.backgroundSize = "cover";

//function to allow user to change dimensions
btn.addEventListener("click", () => {
    let newSize = prompt("Enter the size of the grid (16 - 100) : ");

    newSize = Number(newSize, 10);
    if (isNaN(newSize) || newSize < 16 || newSize > 100) {
        alert("Invalid size. Please enter a number between 16 and 100.");
    } else {
        size = newSize;
        createGrid();
    }
});

//function to creatGrid
function createGrid() {
    container.innerText = "";

    container.setAttribute("style", `display: flex; flex-wrap: wrap; width: ${size * 16}px; border: solid; border-color: black; margin: auto; margin-top: 300px;`);

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.setAttribute("style", "display: flex;");

        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            div.setAttribute("style", "width: 16px; height: 16px; border: 1px solid lightgray; box-sizing: border-box;");

            //change color on mouseover
            div.addEventListener(typeofdrawing, () => {
                let colorIndex = Math.floor(Math.random() * colors.length);
                let colorChoice = colors[colorIndex];
                div.style.backgroundColor = colorChoice;
                div.style.opacity = opacityColor;
                opacityColor -= 0.001;
                if (opacityColor < 0.1) {
                    opacityColor = 0.1;
                }
            });

            divs.push(div);
            row.appendChild(div);
        }

        container.appendChild(row);
    }
}

createGrid();

document.body.appendChild(container);
document.body.appendChild(btn);

