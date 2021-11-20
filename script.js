const urlApi = 'https://rickandmortyapi.com/api/character'
const listElementos = document.getElementById('list')

let nextURL = ''// para buttons
let prevURL = ''// para buttons

const getCharacters = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    nextURL = data.info.next // pega a URL da proxima pagina
    prevURL = data.info.prev // pega a URL da proxima anterior
    const characters = data.results // results é um objeto da API (INFO)
    render(characters) /*recursividade, atribui os dados(characters) a função RENDER*/
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

const nextPage = () => { // função imprementa o button next
    getCharacters(nextURL)
}

const prevPage = () => { // função imprementa o button prev
    getCharacters(prevURL)
}

getCharacters(urlApi) // recebe a url da API