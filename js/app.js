const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const resetButton = document.getElementById('reset');
const canvasEl = document.querySelector('.canvas');

let width = parseInt(widthInput.value);
let height = parseInt(heightInput.value);
let canvasSize = width * height;

createCanvas();

resetButton.addEventListener('click', function() {
    resetCanvas();

    width = parseInt(widthInput.value);
    height = parseInt(heightInput.value);
    canvasSize = width * height;

    createCanvas();
    console.log(width, height);
});


function createCanvas() {
    for (let i = 0; i < canvasSize; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        // div.innerHTML = i + 1;
        
        div.style.width = `${(100 / width)}%`
        canvasEl.append(div);
    }
}

function resetCanvas() {
    canvasEl.innerHTML = '';
}