window.onload = function() {
  function selectedClass() {
const corPrimaria = document.getElementById('container1');
corPrimaria.classList.add('selected');
}
selectedClass()

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
}


