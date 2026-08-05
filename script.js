// Lista de perguntas sobre famosos
const perguntas = [
  { texto: "O Neymar iniciou sua carreira profissional no Santos?", resposta: true },
  { texto: "A cantora Anitta nasceu na cidade de São Paulo?", resposta: false }, // Nasceu no Rio de Janeiro
  { texto: "O DJ Alok é brasileiro?", resposta: true },
  { texto: "A cantora Beyoncé já fez shows no Brasil?", resposta: true }
];

let indiceAtual = 0;
let pontuacao = 0;

// Elementos do HTML
const elementoPergunta = document.getElementById('pergunta-quiz');
const elementoPontos = document.getElementById('pontos');
const conteinerBotoes = document.querySelector('.botoes-quiz');

function carregarPergunta() {
  if (indiceAtual < perguntas.length) {
    elementoPergunta.textContent = perguntas[indiceAtual].texto;
  } else {
    // Quando as perguntas terminam
    elementoPergunta.textContent = "🎉 Fim do quiz! Você é um expert no mundo dos famosos!";
    
    // Mostra um botão para jogar novamente em vez de sumir com tudo
    conteinerBotoes.innerHTML = `
      <button class="btn-resposta" onclick="reiniciarJogo()">Jogar Novamente 🔄</button>
    `;
  }
}

function verificarResposta(respostaUsuario) {
  if (respostaUsuario === perguntas[indiceAtual].resposta) {
    pontuacao += 10;
    alert("ACERTOU! 🚨 Você tá por dentro do mundo Pop!");
  } else {
    alert("ERROU! ❌ Mais sorte na próxima!");
  }
  
  elementoPontos.textContent = pontuacao;
  indiceAtual++;
  carregarPergunta();
}

function reiniciarJogo() {
  indiceAtual = 0;
  pontuacao = 0;
  elementoPontos.textContent = pontuacao;
  
  // Restaura os botões originais
  conteinerBotoes.innerHTML = `
    <button class="btn-resposta" onclick="verificarResposta(true)">Verdadeiro 🟢</button>
    <button class="btn-resposta" onclick="verificarResposta(false)">Falso 🔴</button>
  `;
  
  carregarPergunta();
}

// Inicia o jogo assim que a página é carregada
carregarPergunta();
