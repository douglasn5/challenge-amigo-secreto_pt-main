//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();
  if (nome) {
    nomes.push(nome);
    input.value = '';
    atualizarLista();
  }
}

function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  nomes.forEach((nome) => {
    const li = document.createElement('li');
    li.textContent = nome;
    lista.appendChild(li);
  });
}
function sortearAmigo() {
  if (nomes.length < 2) {
    alert('Adicione pelo menos dois amigos!');
    return;
  }

}
