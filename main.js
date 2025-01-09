const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festa"/>';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste"/>'; //linkamos as imagens para cada situaçao, reprovado ou aprovado (feito depois de linhas)
const atividades = [];
const notas = [];// arrays criados para armazenar valores de atividades e notas (feito após código de insercao de linhas já funcinal)
const spanAprovado = '<span class="resultadoAprovado">Aprovado!</span>';
const spanReprovado = '<span class="resultadoReprovado">Reprovado!</span>';
const notaMinima = parseFloat(prompt("Digite a média que deverá ser alcançada:"));

let linhas = ''; //para impedir que a cada nova ativade a anterior seja apagada, vamos criar uma nova variavel (feito depois de linha)
//após criada, unida (concatenada) e citada no innerHTML temos tambem que tornar a variavel global e assim previnimos que ele seja resetada a cada submit

form.addEventListener('submit' , function(e){
    e.preventDefault(); //linkamos o formulario e previnimos o botao de submit de resetar a page

    adicionaLinha();
    atualizaTabela();//adicionados para organizar melhor o código, depois de criadas funcoes citadas

    atualizaMediaFinal();
});

function adicionaLinha(){ //adicionada para organizar melhor o código, depois de codigo pronto e funcional para acrescentar novas linhas a tabela
    const inputNome = document.getElementById('nome-da-atividade');
    const inputNota = document.getElementById('nota-da-atividade'); //linkamos os campos html as const referidas

    if(atividades.includes(inputNome.value)){
        alert(`A atividade ${inputNome.value} já foi calculada.`);
    } else {
        atividades.push(inputNome.value);
        notas.push(parseFloat(inputNota.value)); // criado para enviar e armazenar os valores digitados de atividades e notas do input para os arrays (feito após código de insercao de linhas já funcinal))

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNota.value}</td>`;
        linha += `<td>${inputNota.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>'; //criamos uma nova linha na table, td, com as tds dos valor informados pelo usuario, no terceiro campo se o valor de nota for maior 
    //ou igual a 7, inserimos o if(positivo) com o sinal "?" e caso negavito(else) com o sinal ":", caso seja mnenor que 7. E acrescentamos o text a ser apresentado
    //"Aprovado" para if e "Reprovado" para else
    //depois de acrescentarmos as const para imagem, substituimos os text de aprovado e reprovado pelos emojis das img linkadas acima

        linhas += linha; //aqui unimos os conteudos (concatenar)

        inputNome.value = '';
        inputNota.value = ''; //para limpar os campos após cada insercao do usuario
    }

    
}

function atualizaTabela(){ //adicionada para organizar melhor o código, depois de codigo pronto e funcional para acrescentar novas linhas a tabela
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas; //aqui vamos dizer onde os dados que descrevemos acima serao adicionados, ou seja, no corpo da table (tbody)
    //dizemos para o sistema que o corpo da tabela é o tbody e que a variavel linha será inserida aqui
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