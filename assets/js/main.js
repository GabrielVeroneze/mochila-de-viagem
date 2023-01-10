const form = document.querySelector('[data-formulario="novoItem"]')

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log('Funcionou!')
})