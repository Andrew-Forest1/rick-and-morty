const characters = []

fetch("https://rickandmortyapi.com/api/character")
.then(res => res.json())
.then(data => data.results.forEach(element => {
    characters.push(element)
}))

export default characters