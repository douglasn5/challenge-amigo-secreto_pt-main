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

//  função para sortear amigo secreto
function sortearAmigo() {
  if (nomes.length < 2) {
    alert('Adicione pelo menos dois amigos!');
    return;
  }
  let sorteio = [...nomes];
  let resultado = [];
  for (let i = 0; i < nomes.length; i++) {
    let possiveis = sorteio.filter(n => n !== nomes[i]);
    if (possiveis.length === 0) {
      // Embaralhe novamente se não houver opção
      return sortearAmigo();
    }
    let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
    resultado.push(`${nomes[i]} → ${sorteado}`);
    sorteio = sorteio.filter(n => n !== sorteado);
  }
  const ulResultado = document.getElementById('resultado');
  ulResultado.innerHTML = '';
  resultado.forEach(r => {
    const li = document.createElement('li');
    li.textContent = r;
    ulResultado.appendChild(li);
  });
}