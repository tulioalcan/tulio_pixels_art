
function addPalette (){
  for(let index = 0; index < 4; index += 1){
  let createPallet = document.createElement('div');
  createPallet.classList.add('color');
  let dadPallet = document.getElementById('color-palette');
  dadPallet.appendChild(createPallet);
  if (index === 0) {
    createPallet.id = 'black';
    createPallet.classList = 'color';
  } else if (index === 1){
    createPallet.id = 'blue';
  } else if (index === 2){
    createPallet.id = 'green';
  } else {
    createPallet.id = 'red';
  }
  }
}
addPalette();

function createBord (){
  for(let index = 0; index < 25; index += 1){
  let createPixelBoard = document.createElement('div');
  createPixelBoard.classList.add('pixel');
  let dadPixel = document.getElementById('pixel-board');
  dadPixel.appendChild(createPixelBoard);
}
}
createBord ();


function selectedClass() {
const corPrimaria = document.getElementById('black');
corPrimaria.classList.add('selected');
}
selectedClass();

const colorPalette = document.getElementById('color-palette');
function changeColorSelected(color){
  let colorSelected = document.querySelector('.selected')
  colorSelected.classList.toggle('selected')
  color.target.classList.add('selected')
}
colorPalette.addEventListener('click', changeColorSelected)

const squarePixels = document.getElementById('pixel-board');
function paintPixelsColor(){
  squarePixels.addEventListener('click', function(paint){
    let selectedPixel = paint.target
    let colorSelected = document.querySelector('.selected');
    if(selectedPixel.classList == 'pixel'){
      selectedPixel.id = colorSelected.id
    }
  }) 
 }
paintPixelsColor();

const clearAll = document.getElementById('clear-board')
function clear(){
  const pixels = document.querySelectorAll('.pixel');
    for(let index = 0; index < pixels.length; index += 1){
      let clearPixels = pixels[index];
      clearPixels.style.backgroundColor = 'white';
    }
}
clearAll.addEventListener('click', clear);
