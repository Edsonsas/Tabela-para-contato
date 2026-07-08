const form = document.getElementById('formulario-contato');
let linhas = ''

form.addEventListener( 'submit', function(e){
    e.preventDefault();

    const inputNome = document.getElementById('nome');
    const inputNumber = document.getElementById('number');
    
    const nomeValido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!nomeValido.test(inputNome.value.trim())) {
        alert('Nome não pode conter números.');
        return;
    }
    
    let linha = '<tr>'; 
    linha += `<td> ${inputNome.value} </td>`;
    linha += `<td> ${inputNumber.value} </td>`;

    linhas += linha

    const bodyTabela = document.querySelector('tbody');
    bodyTabela.innerHTML = linhas

});