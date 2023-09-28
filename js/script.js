document.getElementById("cep").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btnPesquisar").click();
  }
});

document.getElementById("btnPesquisar").addEventListener("click", async function () {
  let cep = document.getElementById("cep").value;
  let url = "https://viacep.com.br/ws/" + cep + "/json/";
  let resultado = document.getElementById("resultado");
    
  try {
    const response = await fetch(url);

    if (!response.ok) {
      resultado.innerHTML = "Erro ao consultar CEP";
    }

    const dados = await response.json();

    if (dados.error || !dados.logradouro || !dados.bairro || !dados.localidade || !dados.uf) {
      resultado.innerHTML = "O CEP não foi encontrado na base dos Correios";
    } else {
      resultado.innerHTML = `
        <strong>Solicitação bem sucedida!</strong>
        <p> -- </p>
        <p>Logradouro: ${dados.logradouro}</p>
        <p>Bairro: ${dados.bairro}</p>
        <p>Cidade: ${dados.localidade}</p>
        <p>Estado: ${dados.uf}</p>
      `;
    }
  } catch (error) {
    console.error(error);
    resultado.innerHTML = "Ocorreu um erro interno na consulta do CEP";
  }
});
