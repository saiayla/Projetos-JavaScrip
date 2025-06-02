let display = document.getElementById('display');
let texto = document.querySelectorAll('.texto');
let soma = document.getElementById('soma');
let limpar = document.getElementById('limpar');
let igual = document.getElementById('igual');
let resultado = 0;

texto.forEach (btn => {
  btn.addEventListener('click', function() {
    display.value += btn.innerText;
  })
})

limpar.addEventListener('click', function() {
  display.value = '';
})

igual.addEventListener('click', function() {
  if (display.value.includes('+')) {
    let numeros = display.value.split('+');
    resultado = parseFloat(numeros[0]) + parseFloat(numeros[1]);
  }
  else if (display.value.includes('-')) {
    let numeros = display.value.split('-');
    resultado = parseFloat(numeros[0]) - parseFloat(numeros[1]);
  }
  else if (display.value.includes('x')) {
    let numeros = display.value.split('x');
    resultado = parseFloat(numeros[0]) * parseFloat(numeros[1]);
  }
  else if (display.value.includes('/')) {
    let numeros = display.value.split('/');
    resultado = parseFloat(numeros[0]) / parseFloat(numeros[1]);
  }
  display.value = resultado;
})
