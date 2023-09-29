const btnTema = document.getElementById("btnTema");

btnTema.addEventListener("click", () => {
  if (document.body.classList.contains("tema-escuro")) {
    document.body.classList.remove("tema-escuro");
    btnTema.innerHTML = '<img src="./assets/icons/dark_tema.svg" alt="botão tema escuro">';
  } else {
    document.body.classList.add("tema-escuro");
    btnTema.innerHTML = '<img src="./assets/icons/light_tema.svg" alt="botão tema claro">';
  }
});

const preferenciaTema = localStorage.getItem("preferenciaTema");
if (preferenciaTema === "tema-escuro") document.body.classList.add("tema-escuro");
