const container = document.querySelector(".grid-container");
const setGridButton = document.querySelector("#set-grid-button");
const gridNumberInput = document.querySelector("#cell-number-input");

setGridButton.addEventListener("click", function () {
    const cellAmount = gridNumberInput.value;
    createGrid(gridNumberInput.value);
});

function createGrid(cellAmount) {
    container.innerHTML = "";
    const gridSize = cellAmount * cellAmount;

    for (let i = 0; i < gridSize; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("grid-cell");
        newDiv.addEventListener("mouseover", function () {
            newDiv.style.backgroundColor = " #000000";
        });
        container.appendChild(newDiv);
    }

    updateGridCellWidth(cellAmount);
}

function updateGridCellWidth(value) {
    const styleSheet = document.styleSheets[0];
    let targetRuleIndex = -1;

    for (let i = 0; i < styleSheet.cssRules.length; i++) {
        if (styleSheet.cssRules[i].selectorText === ".grid-cell") {
            targetRuleIndex = i;
            break;
        }
    }

    if (targetRuleIndex !== -1) {
        styleSheet.cssRules[
            targetRuleIndex
        ].style.width = `calc(600px / ${value})`;

        styleSheet.cssRules[
            targetRuleIndex
        ].style.height = `calc(600px / ${value})`;
    }
}

createGrid(16)