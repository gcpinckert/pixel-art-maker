// Select color input as global variable
let color = document.querySelector('#colorPicker');
// Set mousedown boolean as global variable
let mouseHeld = false;


function makeGrid() {
    // Select grid dimensions
    let rows = Number(document.getElementById('inputHeight').value);
    let columns = Number(document.getElementById('inputWidth').value);
    // Create grid
    let grid = document.querySelector('table');
    grid.innerHTML = "";
    for(var r = 0; r < rows; r++) {
        let newRow = document.createElement('tr');
        grid.appendChild(newRow);
        for(var c = 0; c < columns; c++) {
            let newCell = document.createElement('td');
            newRow.appendChild(newCell);
        }
    }
    // Listen for user to click cell
    grid.addEventListener('click', colorFill);
    // Listen for user to dblclick cell
    grid.addEventListener('dblclick', erase);
    // Listen for user to hold down or release mouse
    grid.addEventListener('mousedown', mouseDown);
    grid.addEventListener('mouseup', mouseUp);
    // Listen for mouse to move over cells
    grid.addEventListener('mouseover', paint);
}

// Fill the cell with selected color
function colorFill(event) {
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = color.value;
    }
}

// mouseHeld Boolean determines whether or not to fill cells
function mouseDown(event) {
    mouseHeld = true;
}

function mouseUp(event) {
    mouseHeld = false;
}

// "Paint" a line of cells when mouse is down
function paint(event) {
    if (mouseHeld === true) {
        colorFill(event);
    }
}

// Erase cell when double clicked
function erase(event) {
    if (event.target.nodeName === 'TD') {
        event.target.style.backgroundColor = '#f4fcd9';
    }
}

// Reveal the game when the play button is clicked
function revealGame() {
    let hiddenElements = document.getElementsByClassName("hidden");
    let len = hiddenElements.length;
    for (i = 0; i < len; i++) {
        hiddenElements[i].style.visibility = 'visible';
    }
}
