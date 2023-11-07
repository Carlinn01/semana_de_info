function validarFormulario(event) {
    event.preventDefault();

    var nome = document.forms["inscricao"]["nome"].value;
    var matricula = document.forms["inscricao"]["matricula"].value;
    var cpf = document.forms["inscricao"]["cpf"].value;
    var email = document.forms["inscricao"]["email"].value;
    var turma = document.forms["inscricao"]["turma"].value;

    // Campos obrigatórios estão preenchidos
    if (nome === "" || matricula === "" || cpf === "" || email === "" || turma === "") {
        alert("Todos os campos obrigatórios devem ser preenchidos.");
        return false;
    }

    // formato do CPF
    var cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpf.match(cpfPattern)) {
        alert("O CPF deve estar no formato XXX.XXX.XXX-XX.");
        return false;
    }

    // formato do email
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        alert("O email deve estar em um formato válido.");
        return false;
    }

    salvarInformacoesLocalmente();
}

function salvarInformacoesLocalmente() {
    var nome = document.forms["inscricao"]["nome"].value;
    var matricula = document.forms["inscricao"]["matricula"].value;
    var cpf = document.forms["inscricao"]["cpf"].value;
    var email = document.forms["inscricao"]["email"].value;
    var turma = document.forms["inscricao"]["turma"].value;


    var inscricao = {
        nome: nome,
        matricula: matricula,
        cpf: cpf,
        email: email,
        turma: turma
    };

    // Converter o objeto para uma string JSON
    var inscricaoJSON = JSON.stringify(inscricao);

    // Armazenar os dados localmente
    localStorage.setItem("inscricao", inscricaoJSON);

    // Exibir uma mensagem de inscrição bem-sucedida
    alert("Inscrição efetuada com sucesso");
}

// Verificar se já existe a chave "total_inscritos" no Local Storage
if (localStorage.getItem("total_inscritos") === null) {
    // Se não existir, criar a chave "total_inscritos" com valor inicial 0
    localStorage.setItem("total_inscritos", 0);
}

// Ao efetuar uma nova inscrição, aumentar o valor da chave "total_inscritos" em 1
var totalInscritos = parseInt(localStorage.getItem("total_inscritos"));
totalInscritos = isNaN(totalInscritos) ? 0 : totalInscritos;
totalInscritos++;
localStorage.setItem("total_inscritos", totalInscritos);

// Para recuperar o número total de inscritos:
var numeroTotalInscritos = localStorage.getItem("total_inscritos");

console.log("Número total de inscritos: " + numeroTotalInscritos);







