// Seleciona o formulário
const form = document.querySelector('[data-formulario="novoItem"]')

// O evento é acionado quando o formulário for enviado
form.addEventListener('submit', (evento) => {

    // Cancela o evento
    evento.preventDefault()

    console.log(evento)

    // Seleciona o elemento dentro do formulario com o id ou name = "nome" 
    console.log(evento.target.elements['nome'].value)
    
    // Seleciona o elemento dentro do formulario com o id ou name = "quantidade" 
    console.log(evento.target.elements['quantidade'].value)
})