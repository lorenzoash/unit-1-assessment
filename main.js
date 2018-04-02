var newQty

var newLook = document.getElementById('num');
var newInput = document.getElementById('myInput');


document.getElementById('plus').addEventListener('click', add);
document.getElementById('minus').addEventListener('click', sub);
// var newNew = parseInt('myInput')

initialize();

function add() {
    newQty += parseInt(newInput.value);
    render();
}

function sub() {
    newQty -= parseInt(newInput.value);
    render();
    }

function initialize() {
    newQty = 0;
    newInput.value = 1;
    render()
}

function render() {
    newLook.innerHTML = newQty;
    newLook.style.color = newQty < 0 ? 'red' : 'blue';
} 