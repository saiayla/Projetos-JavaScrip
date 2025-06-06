function mediaFinal() {
  inputs = document.querySelectorAll('input[type=number]');
  let soma = 0;
  let media = 0;
  inputs.forEach((input) => {
    for (let i = 0; i < inputs.length; i++) {
      soma = inputs[i].value + inputs[i].value;
      media = soma / i;
    }

    exibirMedia(media);
    situacaoFinal(media);
  })
}

function exibirMedia(media) {
  let mediaFinal = document.getElementById('media-final');
  mediaFinal.textContent = media.toFixed(2);
}

function situacaoFinal(media)  {
  let status = document.getElementById('situacao-final');
  status.style.fontWeight = 'bold';
  if (media >= 7) {
    status.textContent = 'APROVADO!';
    status.style.color = 'green';
  } else {
    status.textContent = 'REPROVADO!';
    status.style.color = 'red';
  }
}

calcButton = document.getElementById('calcular');
calcButton.addEventListener('click', function() {
  mediaFinal();
});
