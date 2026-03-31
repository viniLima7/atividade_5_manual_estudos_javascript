document.addEventListener("DOMContentLoaded", function () {

  const botao = document.getElementById("btn");
  const input = document.getElementById("nome");
  const resultado = document.getElementById("resultado");

  botao.addEventListener("click", function () {

    const valorDigitado = input.value;

    resultado.textContent = "O nome digitado foi: " + valorDigitado;
  });

});