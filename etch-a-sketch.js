
let container = document.getElementById('container');

for (let i = 0; i < 16; i++){
    let newDiv = document.createElement('div');
    newDiv.id = "div" + (i+1);
    container.appendChild(newDiv);
}


