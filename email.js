// Função para validar o email
function checarEmail() {
    // Verifica se o campo de email está vazio ou não contém '@' ou '.'
    if (document.forms[0].email.value == "" ||
        document.forms[0].email.value.indexOf('@') == -1 ||
        document.forms[0].email.value.indexOf('.') == -1) {
       
        // Se alguma das condições acima for verdadeira, exibe um alerta
        alert("Por favor, informe um e-mail válido");
       
        // Retorna false para evitar o envio do formulário
        return false;
    } else {
        // Se o email é válido, exibe um alerta de sucesso
        alert("Email informado com sucesso");
       
        // Atualiza o conteúdo de um elemento com o valor do email inserido
        document.getElementById('email').innerHTML = document.forms[0].email.value;
    }
}