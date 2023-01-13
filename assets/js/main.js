// Seleciona o formulário
const form = document.querySelector('[data-formulario="novoItem"]')

// O evento é acionado quando o formulário for enviado
form.addEventListener('submit', (evento) => {

    // Cancela o evento
    evento.preventDefault()

    // Seleciona o elemento dentro do formulario com o id ou name = "nome" 
    const nome = evento.target.elements['nome'].value
    // Seleciona o elemento dentro do formulario com o id ou name = "quantidade" 
    const quantidade = evento.target.elements['quantidade'].value

    criaElemento(nome, quantidade)
})


// Seleciona a lista
const lista = document.querySelector('[data-lista]')

function criaElemento(nomeValor, quantidadeValor) {
    
    // <li class="lista__item"><strong class="lista__unidade">7</strong>Camisas</li>
    
    const item = document.createElement('li')
    item.classList.add('lista__item')
    
    const quantidade = document.createElement('strong')
    quantidade.classList.add('lista__quantidade')
    quantidade.innerHTML = quantidadeValor
    
    item.appendChild(quantidade)
    item.innerHTML += nomeValor
        
    lista.appendChild(item)
}