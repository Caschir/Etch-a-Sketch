
function createGrid(){
    let grid = document.getElementById('grid');
    for (let i = 0; i < 4; i++){
        let row = document.createElement('div');
        row.className = "row";
        grid.appendChild(row);
    }
}

createGrid();