const urlApi = 'https://rickandmortyapi.com/api/character'
const listElementos = document.getElementById('list')

let nextURL = ''
let prevURL = ''

const getCharacters = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    nextURL = data.info.next
    prevURL = data.info.prev
    const characters = data.results
    render(characters) /*recursividade, atribuo os dados(characters) a função RENDER*/
    // console.log(data)
}

const render = (characters) => {

    listElementos.innerHTML = '' //limpa a tela antes de renderizar o proximo insert

    characters.map((character) => {
        listElementos.insertAdjacentHTML('beforeend',
        `<div class="card">
            <div class="card-header">
                <p class="card-title">${character.name}</p>
            </div>
            <div class="card-img">
                <img src="${character.image}" alt="${character.name}">
            </div>
            <div class="card-body">
                <p><b>Gender:</b>${character.gender}</p>
                <p><b>Species:</b>${character.species}</p>
                <p><b>Origem:</b>${character.origin.name}</p>

            </div>
        </div>`)
    })
}

const nextPage = () => {
    getCharacters(nextURL)
}

const prevPage = () => {
    getCharacters(prevURL)
}

getCharacters(urlApi)