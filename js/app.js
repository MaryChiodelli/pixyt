const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const resetButton = document.getElementById('reset');
const colorList = document.querySelector('.color-list');
const canvasEl = document.querySelector('.canvas');

let width = parseInt(widthInput.value);
let height = parseInt(heightInput.value);
let canvasSize = width * height;

const colors = [
    '', '#000000', '#FFFFFF', '#FC9A9C', '#ED3B3C', '#B01A1A', '#FEB168', '#F86817', '#BB390F', '#FDCC44', '#F3940E', '#AB490D'
];
let selectedColor, selectedListItem;
const colorItemEls = [];
// const colorDivEls = [];

colors.forEach(function(color, index) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    
    li.classList.add('color-item');
    div.classList.add('color-item__color');
    div.style.backgroundColor = color;

    if (index === 0) {
        li.classList.add('selected');
        div.classList.add('erase');

        selectedColor = color;
        selectedListItem = li;
    }

    if (index === 2) {
        div.style.border = '1px solid #606875';
    }

    li.append(div);
    colorList.append(li);

    colorItemEls.push(li);
    // colorDivEls.push(div);
});

createCanvas();

resetButton.addEventListener('click', function() {
    resetCanvas();

    width = parseInt(widthInput.value);
    height = parseInt(heightInput.value);
    canvasSize = width * height;

    createCanvas();
    // console.log(width, height);
});

canvasEl.addEventListener('click', function(event) {
    const target = event.target;

    if (target !== canvasEl) {
        if (selectedColor === '') {
            target.style.border = '1px solid #e2e2e2';
            target.style.backgroundColor = '#F1F1F1';
        }
        else {
            target.style.border = 'none';
            target.style.backgroundColor = selectedColor;
        }
    }
});

colorList.addEventListener('click', function(event) {
    const target = event.target;
    
    if (target !== colorList && !colorItemEls.includes(target)) {
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