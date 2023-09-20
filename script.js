
function createGrid(){
    let grid = document.getElementById('grid');
    for (let i = 0; i < 4; i++){
        let row = document.createElement('div');
        row.className = "row";
        grid.appendChild(row);
        for (let i = 0; i < 4; i++) {
            let col = document.createElement('div');
            col.className = "col";
            row.appendChild(col);
        }
    }
}

createGrid();