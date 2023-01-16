// Seleciona o formulário
const form = document.querySelector('[data-formulario="novoItem"]')

// O evento é acionado quando o formulário for enviado
form.addEventListener('submit', (evento) => {

    // Cancela o evento
    evento.preventDefault()

    // Seleciona o elemento dentro do formulario com o id ou name = "nome" e "quantidade"
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    // Apaga o valor dos input
    nome.value = ''
    quantidade.value = ''
})


// Seleciona a lista
const lista = document.querySelector('[data-lista]')

// Array de objetos com os dados do item  
const listaDados = []

// Recebe o valor dos input para criar e adicionar os items na lista
function criaElemento(nomeValor, quantidadeValor) {
    
    const item = document.createElement('li')
    item.classList.add('lista__item')
    
    const quantidade = document.createElement('strong')
    quantidade.classList.add('lista__quantidade')
    quantidade.innerHTML = quantidadeValor
    
    item.appendChild(quantidade)
    item.innerHTML += nomeValor

    lista.appendChild(item)


    // Objeto com o nome e quantidade dos items
    const itemDados = {
        'nome': nomeValor,
        'quantidade': quantidadeValor
    }

    // Adiciona o objeto itemDados no array listaDados
    listaDados.push(itemDados)

    // Armazena a chave 'item' e o valor 'listaDados' (array de objetos convertido em uma string JSON)
    // Nota: As chaves e os valores armazenados devem estar no formato de string 
    localStorage.setItem('item', JSON.stringify(listaDados))
}