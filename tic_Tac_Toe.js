// Restart Game Button
var restartBtn = document.querySelector("#btn_restart");
// Grab all the squares
var allCells = document.querySelectorAll('td');

// Clear Squares Function
function clearBoard() {
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].textContent='';
  }
}
restartBtn.addEventListener('click',clearBoard);

// Create a function that will check the square marker
function setCellItems() {
  if (this.textContent==="") {
    this.textContent="X";
  }else if (this.textContent==="X") {
    this.textContent="O";
  }else {
    this.textContent="";
  }
}

// Use a for loop to add Event listeners to all the squares
for (var i = 0; i < allCells.length; i++) {
  allCells[i].addEventListener("click", setCellItems);
}
