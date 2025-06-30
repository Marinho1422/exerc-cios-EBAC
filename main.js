const campoA = document.getElementById("campo-A");
const campoB = document.getElementById("campo-B");
const formulario = document.getElementById("formulario-deposito");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    if (valorA > valorB) {
        mensagem.textContent = "Campo A não pode ser maior que Campo B.";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Seu depósito foi enviado com sucesso!";
        mensagem.style.color = "green";
    }
});
