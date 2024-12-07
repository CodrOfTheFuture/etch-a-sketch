let divs = [];
let container = document.createElement("div");
let btn = document.createElement("button");
size = 16;
container.setAttribute("style", "display: flex; flex-wrap: wrap; width: 256px; border:solid; border-color:black; margin:auto ; margin-top: 300px; ");
btn.setAttribute("style", " height: 30px; width: 100px; ");
btn.textContent = "Change Size";

btn.addEventListener("click", () => {
    size = prompt("Enter the size of the grid (16 - 100) : ");
});


running = true;
while (running == true){
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.setAttribute("style", "display: flex;");

        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            div.setAttribute("style", "width: 16px; height: 16px; ");
            
            // Add hover effect using event listeners
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "blue";
            });
            
            divs.push(div);
            row.appendChild(div);
        }
        
        container.appendChild(row);
    }
    document.body.appendChild(container);
    document.body.appendChild(btn);
    console.log(divs);
}
