const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festa"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"/>';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultadoAprovado">Aprovado!</span>';
const spanReprovado = '<span class="resultadoReprovado">Reprovado!</span>';
const notaMinima = parseFloat(prompt("Digite a média que deverá ser alcançada:"));

let linhas = '';

form.addEventListener('submit' , function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

    atualizaMediaFinal();
});

function adicionaLinha(){ 
    const inputNome = document.getElementById('nome-da-atividade');
    const inputNota = document.getElementById('nota-da-atividade'); 

    if(atividades.includes(inputNome.value)){
        alert(`A atividade ${inputNome.value} já foi calculada.`);
    } else {
        atividades.push(inputNome.value);
        notas.push(parseFloat(inputNota.value)); 

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNota.value}</td>`;
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>'; 
        linhas += linha;

        inputNome.value = '';
        inputNota.value = ''; 
    }

    
}

function atualizaTabela(){ 
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculoMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculoMediaFinal(){
    let somaDasNotas = 0;

    for(let i = 0; i< notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}