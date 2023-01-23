// Seleciona o formulário
const form = document.querySelector('[data-formulario="novoItem"]')
// Seleciona a lista
const lista = document.querySelector('[data-lista]')
// Array de objetos com os dados do item, recebe a valor da chave 'item' armazenado se ela existir, senão ele cria um array vazio
// Depois que a página for recarregada irá pegar os dados dos item armazenado no localStorage
const listaDados = JSON.parse(localStorage.getItem('item')) === null ? [] : JSON.parse(localStorage.getItem('item'))

// Depois que a página for recarregada chama a função criaElemento() para cada item
listaDados.forEach((dados) => {
    criaElemento(dados)
})

// O evento é acionado quando o formulário for enviado
form.addEventListener('submit', (evento) => {
    // Cancela o evento
    evento.preventDefault()

    // Seleciona o elemento dentro do formulario com o id ou name = "nome" e "quantidade"
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    // Objeto com o nome e quantidade dos items
    const itemDados = {
        nome: nome.value,
        quantidade: quantidade.value,
    }

    // Retorna o novo item adicionado se ele existir, se ele não existir retorna undefined
    const existe = listaDados.find((dados) => dados.nome === nome.value)

    if (existe === undefined) {  // Se o item não existir, ele cria
        criaElemento(itemDados)

        // Adiciona o objeto itemDados no array listaDados
        listaDados.push(itemDados)

    } else {                     // Se o item já existir, ele atualiza
        atualizaElemento(itemDados)

        // Verifica se algum nome de 'listaDados' é igual o de existe, se sim, ele sobrescreve os valores do item
        for (let i in listaDados) {
            if (listaDados[i].nome === existe.nome) {
                listaDados[i] = itemDados
            }
        }
    }

    // Armazena a chave 'item' e o valor 'listaDados' (array de objetos convertido em uma string JSON)
    localStorage.setItem('item', JSON.stringify(listaDados))

    // Apaga o valor dos input
    nome.value = ''
    quantidade.value = ''
})

// Recebe os valores dos objeto itemDados para criar e adicionar os items na lista
function criaElemento(itemValor) {
    const item = document.createElement('li')
    item.classList.add('lista__item')

    const quantidade = document.createElement('strong')
    quantidade.classList.add('lista__quantidade')
    quantidade.dataset.id = itemValor.nome
    quantidade.innerHTML = itemValor.quantidade

    item.appendChild(quantidade)
    item.innerHTML += itemValor.nome
    item.appendChild(botaoDeleta())

    lista.appendChild(item)
}

// Atualiza a quantidade dos items
function atualizaElemento(itemValor) {
    const quantidade = document.querySelector(`[data-id="${itemValor.nome}"]`)

    quantidade.innerHTML = itemValor.quantidade
}

function botaoDeleta() {
    // Cria um botao de deletar os items
    const botao = document.createElement('button')
    botao.innerText = 'X'

    // Adiciona evento de clique no botão e chama a função deletaElemento()
    botao.addEventListener('click', function() {
        deletaElemento(this.parentNode, this.previousElementSibling.dataset.id)
    })

    return botao
}

// 1º Parâmetro: elemento pai <li> do botão clicado | 2º Parâmetro: data-id do elemento irmão <strong> do botão clicado
function deletaElemento(item, id) {
    // Remove o item do DOM
    item.remove()

    // Retorna o índice do dado que tiver o nome igual o id
    const dadoIndice = listaDados.findIndex(dados => dados.nome === id)
    
    // Remove o dado da lista a partir do indice inserido  
    listaDados.splice(dadoIndice, 1)

    // Armazena a listaDados atualizada, sem os dados removidos
    localStorage.setItem('item', JSON.stringify(listaDados))
}