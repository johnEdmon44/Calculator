const numberButtons = document.querySelectorAll('.gridItem-number');
const operatorButtons = document.querySelectorAll('.gridItem-operator');
const clearButton = document.querySelector('.gridItem-clear');
const deleteButton = document.querySelector('.gridItem-delete');
const equalButton = document.querySelector('.gridItem-equal');
const decimalButton = document.querySelector('.gridItem-decimal');
const inputField = document.querySelector('#currentInput');
const resultField = document.querySelector('#resultInput');
let a = '';
let b = '';
let operatorValue = '';
let operation = '';
let c = '';


//number buttons
numberButtons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    if(inputField.textContent.includes('=')) {
      return;
    } else if(operation === '') {
      a += this.value;
    } else {
      b += this.value;
    }
    inputField.textContent += this.value;
  });
});

