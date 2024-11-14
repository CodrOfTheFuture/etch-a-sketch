let divs = [];
let container = document.createElement("div");

container.setAttribute("style", "display: flex; flex-wrap: wrap;  width: 256px;");

for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.setAttribute("style", "background-color: black; width: 15px; height: 15px;");
    divs.push(div); 
}

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.setAttribute("style", "display: flex; ");

    for (let j = 0; j < 16; j++) {
        row.appendChild(divs[i * 16 + j]);
    }
    container.appendChild(row);
}

// Append the container to the body
document.body.appendChild(container);

console.log(divs);
