document.addEventListener('DOMContentLoaded', () => {
  const btnVerdadeiro = document.querySelector('.btn-verdadeiro');
  const btnFalso = document.querySelector('.btn-falso');
  const pontuacaoElemento = document.getElementById('pontuacao');
  
  let pontos = 0;
  let respondido = false;

  btnVerdadeiro.addEventListener('click', () => {
    if (respondido) return;
    pontos += 10;
    pontuacaoElemento.textContent = pontos;
    btnVerdadeiro.style.backgroundColor = '#28a745';
    btnVerdadeiro.style.color = '#fff';
    alert('🎉 Acertou! O Neymar começou sua carreira no Santos.');
    respondido = true;
  });

  btnFalso.addEventListener('click', () => {
    if (respondido) return;
    btnFalso.style.backgroundColor = '#dc3545';
    btnFalso.style.color = '#fff';
    alert('❌ Errou! O Neymar iniciou no Santos sim.');
    respondido = true;
  });
});
