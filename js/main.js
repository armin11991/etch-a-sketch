console.log('Hello Armando');

const gridContainer = document.querySelector('#gridContainer');
let rows = document.querySelector('.rows');
let columns = document.querySelector('.columns');
let gridSize = 16;

function createGrid(gridSize) {
    for (a = 0; a < (gridSize * gridSize); a++) {
        let cell = document.createElement("div");
        cell.innerText = (a + 1);
        gridContainer.appendChild(cell).className = "gridItem";
      };
}

function blackHover () {
    const gridItem = document.querySelectorAll(".gridItem");
    gridItem.forEach(gridItem => gridItem.addEventListener("mouseover", e => {
        e.target.style.cssText = "background:black;color:black";
    }));

}

var bttnSize = document.querySelector('.bttnSize').onclick = function() {
    var gridPromptSize = parseInt(prompt("Please enter the new grid size", "9"));

    if (gridPromptSize != null) {
        console.log(gridPromptSize);
      }
    
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    function setupGrid(gridPromptSize) {
        gridContainer.style.gridTemplateColumns = `repeat(${gridPromptSize}, 1fr)`
        gridContainer.style.gridTemplateRows = `repeat(${gridPromptSize}, 1fr)`
    }

    setupGrid(gridPromptSize);
    createGrid(gridPromptSize);
    blackHover();
}

createGrid(gridSize);
blackHover();