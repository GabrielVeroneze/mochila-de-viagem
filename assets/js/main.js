const form = document.querySelector('[data-formulario="novoItem"]')
const lista = document.querySelector('[data-lista]')
const listaDados = JSON.parse(localStorage.getItem('item')) === null ? [] : JSON.parse(localStorage.getItem('item'))

listaDados.forEach((dados) => {
    criaElemento(dados)
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const itemDados = {
        nome: nome.value,
        quantidade: quantidade.value,
    }

    const existe = listaDados.find((dados) => dados.nome === nome.value)

    if (existe === undefined) {
        criaElemento(itemDados)

        listaDados.push(itemDados)
    } else {
        atualizaElemento(itemDados)

        for (let i in listaDados) {
            if (listaDados[i].nome === existe.nome) {
                listaDados[i] = itemDados
            }
        }
    }

    localStorage.setItem('item', JSON.stringify(listaDados))

    nome.value = ''
    quantidade.value = ''
})

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

function atualizaElemento(itemValor) {
    const quantidade = document.querySelector(`[data-id="${itemValor.nome}"]`)

    quantidade.innerHTML = itemValor.quantidade
}

function botaoDeleta() {
    const botao = document.createElement('button')
    botao.innerText = 'X'

    botao.addEventListener('click', function() {
        deletaElemento(this.parentNode, this.previousElementSibling.dataset.id)
    })

    return botao
}

function deletaElemento(item, id) {
    item.remove()

    const dadoIndice = listaDados.findIndex(dados => dados.nome === id)
    
    listaDados.splice(dadoIndice, 1)

    localStorage.setItem('item', JSON.stringify(listaDados))
}