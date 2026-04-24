const form = document.getElementById("Formulario");

const erro = document.getElementById("Erro");

form.addEventListener("submit", function(event){
    erro.textContent = "";
    const Nome = document.getElementById("Nome").value.trim();
    const Email = document.getElementById("Email").value.trim();
    const Idade = document.getElementById("Idade").value;
        if (Nome === "") {
        erro.textContent = "O nome não pode estar vazio.";
        event.preventDefault();
        return;
    }

    if (!Email.includes("@")) {
        erro.textContent = "O email deve conter '@'.";
        event.preventDefault();
        return;
    }

    if (Idade <= 0 || Idade === "") {
        erro.textContent = "A idade deve ser maior que 0.";
        event.preventDefault();
        return;
    }
    erro.textContent = "Formulário enviado com sucesso!";
    event.preventDefault();
    form.reset();
});