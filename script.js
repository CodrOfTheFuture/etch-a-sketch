let divs = [];
let container = document.createElement("div");
let mk_btn = document.createElement("div")

size = 16

container.setAttribute("style", "display: flex; flex-wrap: wrap; width: 256px; border: solid; border-color:black; justify-content:center; align-items:center;margin-left:800px;margin-top:300px;");
mk_btn.setAttribute("style", "height:70px; width: 100px; border:solid; border-color:black;")

// Create 256 divs and store them in the divs array
for (let i = 0; i < (size * size); i++) {
    let div = document.createElement("div");
    div.setAttribute("style", "background-color: white; width: 15px; height: 15px;");
    divs.push(div);
}

mk_btn.addEventListener("click", () => {
    size = prompt("Choose a size 16 to 100")
    if (size < 16 || size > 100){
        alert("Invalid input")
    }
})


// Create rows and append divs into rows
for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.setAttribute("style", "display: flex; ");

    for (let j = 0; j < size; j++) {
        row.appendChild(divs[i * size + j]);
    }
    container.appendChild(row);
}

// Append the container to the body
document.body.appendChild(container);
document.body.appendChild(mk_btn);


console.log(divs);

// Add event listener to each div for mouseover
divs.forEach(div => {
    div.addEventListener('mouseover', () => {
        // Only change the background-color, keep other styles intact
        div.style.backgroundColor = 'blue';
        console.log('Hovered over a div!');
    });

});
