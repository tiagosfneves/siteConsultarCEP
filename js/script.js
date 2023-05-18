document.getElementById("btnPesquisar").addEventListener("click", function(){
    let cep = document.getElementById("cep").value;         //pega o valor do id cep
    let url = "https://viacep.com.br/ws/" + cep + "/json/";   //linkda api
    let resultado = document.getElementById("resultado");   //pega a div resultado

    // Função responsavel por fazer uma pesquisa
    fetch(url).then(response => response.json()).then(dados => {
        if (dados.error) {
            resultado.innerHTML = "CEP não encontrado"
        } else {
            resultado.innerHTML = "Rua: " + dados.logradouro + " Bairro " + dados.bairro
        }

    }).catch(error => console.error(error))

})
