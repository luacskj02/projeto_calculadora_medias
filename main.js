const form= document.getElementById('form');
const name = [];
const tell= [];

let line = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    addLine();
    updateTable();
    });

function addLine(){
    const inputName = document.getElementById('Nome');
    const inputTell = document.getElementById('Número');

    if (name.includes(inputName.value)) {
        alert(`Nome ${inputName.value} Already inserted`);
    } else {

    name.push(inputName.value);
    tell.push(toString(inputTell.value));

    let row = '<tr>'; 
    row += `<td>${inputName.value}</td>`;
    row += `<td>${inputTell.value}</td>`;
        row += '</tr>';

    line += row;
    }

    inputName.value = '';
    inputTell.value = '';
}

function updateTable() {
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = line;
}