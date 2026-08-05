// Perguntas do Quiz de Fofocas
const perguntas = [
  { texto: "O Neymar já jogou no Santos?", resposta: true },
  { texto: "A Anitta nasceu em São Paulo?", resposta: false }, // Nasceu no Rio
  { texto: "O DJ Alok é um dos DJs mais famosos do mundo?", resposta: true },
  { texto: "A cantora Taylor Swift nunca fez turnê no Brasil?", resposta: false }
];

let indiceAtual = 0;
let pontuacao = 0;

const elementoPergunta = document.getElementById('pergunta-quiz');
const elementoPontos = document.getElementById('pontos');

function carregarPergunta() {
  if (indiceAtual < perguntas.length) {
    elementoPergunta.textContent = perguntas[indiceAtual].texto;
  } else {
    elementoPergunta.textContent = "🎉 Você completou o Quiz dos Famosos!";
    document.querySelector('.botoes-quiz').style.display = 'none';
  }
}

function verificarResposta(respostaUsuario) {
  if (respostaUsuario === perguntas[indiceAtual].resposta) {
    pontuacao += 10;
    alert("ACERTOU! 🚨 Você tá por dentro das fofocas!");
  } else {
    alert("ERROU! ❌ Essa passou perto...");
  }
  
  elementoPontos.textContent = pontuacao;
  indiceAtual++;
  carregarPergunta();
}

// Inicia o jogo ao carregar a página
carregarPergunta();
