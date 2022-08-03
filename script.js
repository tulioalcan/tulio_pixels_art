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
}

