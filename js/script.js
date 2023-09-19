document.getElementById("cep").addEventListener("keydown", function (event) {
  // Verifique se a tecla pressionada é "Enter"
  if (event.key === "Enter") {
    event.preventDefault(); // Impede que o formulário seja enviado (se aplicável)
    document.getElementById("btnPesquisar").click(); // Simula o clique do "Pesquisar"
  }
});

document.getElementById("btnPesquisar").addEventListener("click", function () {
  let cep = document.getElementById("cep").value; //pega o valor do id cep
  let url = "https://viacep.com.br/ws/" + cep + "/json/"; //link da api
  let resultado = document.getElementById("resultado"); //pega a div resultado

  // Função responsável por fazer a pesquisa
  fetch(url).then((response) => response.json()).then((dados) => {
      if (dados.error) {
        resultado.innerHTML = "CEP não encontrado";
      } else {
        resultado.innerHTML = `
          <p>Logradouro: ${dados.logradouro}</p>
          <p>Bairro: ${dados.bairro}</p>
          <p>Cidade: ${dados.localidade}</p>
          <p>Estado: ${dados.uf}</p>
        `;
      }
    })
    .catch((error) => console.error(error));
});
