// adicionar elemento Item 0 e Item 5

const lista = document.getElementById('lista')

// ITEM ZERO
const itemZero = document.createElement('li')

// colocando texto através do innerHTML

itemZero.innerHTML = 'item 0'

// ITEM CINCO
const itemCinco = document.createElement('li')

// colocando texto através do createTextNode
const textoItemCinco = document.createTextNode('item 5')

itemCinco.appendChild(textoItemCinco)


// ADICIONANDO OS NOVOS ITENS À LISTA
lista.insertAdjacentElement('afterbegin', itemZero)

lista.insertAdjacentElement('beforeend', itemCinco)

