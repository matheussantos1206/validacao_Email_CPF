// Adiciona um event listener para o evento 'submit' do formulário com ID 'cpfForm'
document.getElementById('cpfForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão de submit do formulário
    
    // Obtém o valor do campo de CPF
    const cpf = document.getElementById("cpf").value;
    
    // Elemento onde será exibida a mensagem de validação
    const msg = document.getElementById("message");
  
    // Chama a função validarCPF e verifica se o CPF é válido
    if (validarCPF(cpf)) {
        msg.textContent = "O CPF é válido"; // Mensagem de CPF válido
        msg.style.color = 'green'; // Estilo para mensagem de sucesso
    } else {
        msg.textContent = "O CPF não é válido"; // Mensagem de CPF inválido
        msg.style.color = 'red'; // Estilo para mensagem de erro
    }
 });
  
 // Função para validar o CPF
 function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos do CPF
    
    // Verifica se o CPF não possui 11 dígitos ou se todos os dígitos são iguais
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }
  
    let soma = 0;
    let resto;
  
    // Validação do 1º dígito verificador (10º dígito)
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
  
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
  
    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }
  
    // Validação do 2º dígito verificador (11º dígito)
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
  
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) {
        resto = 0;
    }
  
    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }
  
    return true; // Retorna true se o CPF é válido
 }
  
 