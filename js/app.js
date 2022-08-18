const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const resetButton = document.getElementById('reset');
const colorListEl = document.querySelector('.color-list');
const canvasEl = document.querySelector('.canvas');

let width = parseInt(widthInput.value);
let height = parseInt(heightInput.value);
let canvasSize = width * height;

const colors = [
    '', '#000000', '#FFFFFF', '#FC9A9C', '#ED3B3C', '#B01A1A', '#FEB168', '#F86817', '#BB390F', '#FDCC44', '#F3940E', '#AB490D'
];
let selectedColor, selectedListItem, isClicked = false;
const colorItemEls = [];

colors.forEach(function(color, index) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    
    li.classList.add('color-item');
    div.classList.add('color-item__color');
    div.style.backgroundColor = color;

    if (index === 0) {
        div.classList.add('erase');
    }

    if (index === 1) {
        li.classList.add('selected');

        selectedColor = color;
        selectedListItem = li;
    }

    if (index === 2) {
        div.style.border = '1px solid #606875';
    }

    li.append(div);
    colorListEl.append(li);

    colorItemEls.push(li);
});

createCanvas();

resetButton.addEventListener('click', function() {
    resetCanvas();

    width = parseInt(widthInput.value);
    height = parseInt(heightInput.value);
    canvasSize = width * height;

    createCanvas();
});

canvasEl.addEventListener('click', (event) => {
    if (event.target === canvasEl) {
        return;
    }

    draw(event);
});

canvasEl.addEventListener('mousedown', (event)  => {
    if (event.button === 0) {
        isClicked = true;
    }
});

canvasEl.addEventListener('mousemove', (event) => {
    if (isClicked) {
        draw(event);
    }
});

canvasEl.addEventListener('mouseup', () => {
    isClicked = false;
});

colorListEl.addEventListener('click', function(event) {
    const target = event.target;
    
    if (target !== colorListEl && !colorItemEls.includes(target)) {
        selectedListItem.classList.remove('selected');

        selectedListItem = target.parentElement;
        selectedListItem.classList.add('selected');

        selectedColor = target.style.backgroundColor;
    }
});

function createCanvas() {
    for (let i = 0; i < canvasSize; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        
        div.style.width = `${(100 / width)}%`;
        canvasEl.append(div);
    }
}

function resetCanvas() {
    canvasEl.innerHTML = '';
}

function draw(e) {
    if (!selectedColor) {
        e.target.style.border = '1px solid #E2E2E2';
        e.target.style.backgroundColor = '#F1F1F1';
    }
    else {
        e.target.style.border = 'none';
        e.target.style.backgroundColor = selectedColor;
    }
}