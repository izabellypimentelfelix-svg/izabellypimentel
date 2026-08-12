// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
  // Seleção dos elementos
  const btnVerdadeiro = document.querySelector('.btn-verdadeiro');
  const btnFalso = document.querySelector('.btn-falso');
  const pontuacaoElemento = document.getElementById('pontuacao');
  
  let pontos = 0;
  let jaRespondeu = false;

  // Função para processar a resposta
  function verificarResposta(respostaUsuario) {
    if (jaRespondeu) return; // Evita que o usuário clique múltiplas vezes

    // Resposta correta do quiz: Verdadeiro (true)
    const respostaCorreta = true;

    if (respostaUsuario === respostaCorreta) {
      pontos += 10;
      pontuacaoElemento.textContent = pontos;
      
      // Feedback visual positivo
      btnVerdadeiro.style.backgroundColor = '#28a745';
      btnVerdadeiro.style.color = '#fff';
      alert('🎉 Aceeertou! Neymar estreou no profissional do Santos em 2009.');
    } else {
      // Feedback visual negativo
      btnFalso.style.backgroundColor = '#dc3545';
      btnFalso.style.color = '#fff';
      alert('❌ Errou! O Neymar iniciou sim a carreira no Santos.');
    }

    jaRespondeu = true;
    
    // Desabilita os botões após responder
    btnVerdadeiro.style.cursor = 'not-allowed';
    btnFalso.style.cursor = 'not-allowed';
  }

  // Eventos de clique
  btnVerdadeiro.addEventListener('click', () => verificarResposta(true));
  btnFalso.addEventListener('click', () => verificarResposta(false));
});
