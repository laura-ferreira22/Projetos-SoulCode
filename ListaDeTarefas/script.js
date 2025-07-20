const form = document.querySelector("form");
const tabela = document.querySelector(".tabela");
const alerta = document.querySelector(".alerta");
const concluir = document.querySelector(".btnConcluir");

// inputs
const tarefa = document.querySelector("#novaTarefa");
const prioridade = document.querySelector("#prioridade");
const botaoAd = document.querySelector(".btnAd");

// variáveis p/ adicionar campos
const addTarefa = document.querySelector(".adTarefa");
const addPrioridade = document.querySelector(".adPrioridade");
const addAcao = document.querySelector(".adAcao");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const valorTarefa = tarefa.value;
  const valorPrioridade = prioridade.value;
  let badgeHTML = "";

  if (valorTarefa === "" || valorPrioridade === "Selecione uma prioridade") {
    alertaTarefa.classList.remove("d-none");
    return;
  } else {
    alertaTarefa.classList.add("d-none");
  }

  if (valorPrioridade === "Alta") {
    badgeHTML = `<span class="badge bg-danger">Alta</span>`;
  } else if (valorPrioridade === "Média") {
    badgeHTML = `<span class="badge bg-warning text-dark">Média</span>`;
  } else if (valorPrioridade === "Baixa") {
    badgeHTML = `<span class="badge bg-success">Baixa</span>`;
  }

  tabela.innerHTML += `
        <tr>
        <td>${valorTarefa}</td>
        <td>${badgeHTML}</td>
        <td><button class="btnConcluir btn ">Concluir</button></td>
        </tr>
    `;

  tarefa.value = "";
  prioridade.selectedIndex = 0;
});

tabela.addEventListener("click", (evento) => {
  if (evento.target.classList.contains("btnConcluir")) {
    const linha = evento.target.closest("tr");
    linha.remove();
  }
});
