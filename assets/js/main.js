// Seleciona o formulário
const form = document.querySelector('[data-formulario="novoItem"]')
// Seleciona a lista
const lista = document.querySelector("[data-lista]")
// Array de objetos com os dados do item, recebe a valor da chave 'item' armazenado se ela existir, senão ele cria um array vazio
// Depois que a página for recarregada irá pegar os dados dos item armazenado no localStorage
const listaDados = JSON.parse(localStorage.getItem("item")) === null ? [] : JSON.parse(localStorage.getItem("item"))

// Depois que a página for recarregada chama a função criaElemento() para cada item
listaDados.forEach((dados) => {
    criaElemento(dados)
})

// O evento é acionado quando o formulário for enviado
form.addEventListener("submit", (evento) => {
    // Cancela o evento
    evento.preventDefault()

    // Seleciona o elemento dentro do formulario com o id ou name = "nome" e "quantidade"
    const nome = evento.target.elements["nome"]
    const quantidade = evento.target.elements["quantidade"]

    // Objeto com o nome e quantidade dos items
    const itemDados = {
        nome: nome.value,
        quantidade: quantidade.value,
    }

    criaElemento(itemDados)


    if (localStorage.getItem("item") !== null) {

        JSON.parse(localStorage.getItem("item")).forEach((dados) => {

            if (dados.nome == itemDados.nome) {
                a
            }
        })
    }


    // Adiciona o objeto itemDados no array listaDados
    listaDados.push(itemDados)

    // Armazena a chave 'item' e o valor 'listaDados' (array de objetos convertido em uma string JSON)
    localStorage.setItem("item", JSON.stringify(listaDados))

    // Apaga o valor dos input
    nome.value = ""
    quantidade.value = ""
})

// Recebe os valores dos objeto itemDados para criar e adicionar os items na lista
function criaElemento(itemValor) {
    const item = document.createElement("li")
    item.classList.add("lista__item")

    const quantidade = document.createElement("strong")
    quantidade.classList.add("lista__quantidade")
    quantidade.innerHTML = itemValor.quantidade

    item.appendChild(quantidade)
    item.innerHTML += itemValor.nome

    lista.appendChild(item)
}
